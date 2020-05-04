#!/usr/bin/envv

import groovy.transform.Field

@Field String slack_channel = "#jenkins_notification"  // jenkins
@Field String slack_domain = ""  // domain server slack
@Field String slack_token = "2423432" // slack jenkins token
@Field String sonarqube_host = "localhost:3000" // SonarQube local ip
@Field String git_branch_name = ""

pipeline {
  agent none
  post {
    always { 
      node('master') {
        notifyBuildComplete()
        cleanWs disableDeferredWipeout: true, deleteDirs: true
      }
    }
    success {
      updateGitlabCommitStatus name: 'build', state: 'success'
      updateGitlabCommitStatus name: 'test', state: 'success'
      updateGitlabCommitStatus name: 'deploy', state: 'success'
    }
    failure {
      updateGitlabCommitStatus name: 'build', state: 'failed'
      updateGitlabCommitStatus name: 'test', state: 'failed'
      updateGitlabCommitStatus name: 'deploy', state: 'failed'
    }
  }
  options {
    gitLabConnection('jenkins_ci')
    gitlabBuilds(builds: ['build', 'test', 'deploy'])
    timeout(time: 15, unit: 'MINUTES')
  }
  triggers {
    gitlab(
      triggerOnPush: true,
      triggerOnMergeRequest: true,
      branchFilterType: 'All',
      addNoteOnMergeRequest: true,
      addCiMessage: true,
      excludeBranchesSpec: "master",
    )
  }
  stages {
    stage('Prepare') {
      steps {
        notifyBuildStart()
        sh 'node -v'
        echo "PREPARING..."
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        echo "BUILDING..."
        sh 'npm run build'
      }
    }

    stage('Static Code Analysis') {
      steps {
        script {
          echo "static code analysis"
          def scannerHome = tool 'SonarQube_Scanner_3.3'; // SonarQube Scanner name
          withSonarQubeEnv('SonarQube') { // SonarQube Server name
            sh "chmod +x ${scannerHome}/bin/sonar-scanner"
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.login=${env.SONAR_AUTH_TOKEN} -Dsonar.host.url=${sonarqube_host}"
          }
        }
      }
    }
    
    stage("Quality Gate") {
      steps {
        script {
          timeout(time: 5, unit: 'MINUTES') { // Just in case something goes wrong, pipeline will be killed after a timeout
            def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
            if (qg.status != 'OK') {
              error "Pipeline aborted due to quality gate failure: ${qg.status}"
            }
          }
        }
      }
    }

  }
}

def notifyBuildStart() {
  def slack_msg = "${getJobName()} was started on branch [${env.GIT_BRANCH}] by ${getGitCommitterName()} ${getBuildDetailLink()}"
  notifySlack(slack_msg, '')
}

def notifyBuildComplete() {
  def result = currentBuild.result ? currentBuild.result : currentBuild.currentResult
  def colorMap = [ 'SUCCESS': 'good', 'FAILURE': 'danger', 'UNSTABLE': 'danger', 'ABORTED': 'warning' ]
  def slack_color = colorMap[result]

  def slack_msg = "${getJobName()} was built on branch [${git_branch_name}] ${result} ${getBuildDetailLink()}"
  if (result == 'FAILURE') {
    slack_msg += "\n <@${getSlackUserId()}> Your build was FAILURE. Please fix it!!"
    slack_msg += extractErrorMsg()
  }

  notifySlack(slack_msg, slack_color)
}

def notifySlack(msg, slack_color) {
  slackSend channel: "${slack_channel}", color: "${slack_color}", message: "${msg}", teamDomain: "${slack_domain}", token: "${slack_token}"
}

def getJobName() {
  return "job ${env.JOB_NAME}[No.${env.BUILD_NUMBER}]"
}

def getGitCommitterName() {
  return sh (
    script: "git --no-pager show -s --format=\'%an\'",
    returnStdout: true
  ).trim()
}

def getGitCommitterEmail() {
  return sh (
    script: "git --no-pager show -s --format=\'%ae\'",
    returnStdout: true
  ).trim()
}

def getBuildDetailLink() {
  return "(<${env.BUILD_URL}|Open>)"  // SlackでOpenのアンカーとして表示されます
}

def getSlackUserId() {
  def userIdMap = [
    'nhattruongniit@yahoo.com.vn': 'DRQ',
  ]
  def email = getGitCommitterEmail()
  return userIdMap[email]
}

def extractErrorMsg() {
  def log = currentBuild.rawBuild.getLog(100)
  def errorMsg = ''
  log.each { line ->
    if (line.contains('ERR')) {
        errorMsg += "\n${line}"
    }
  }
  if (errorMsg) {
    errorMsg = "\n```${errorMsg}\n```"
  }
  return errorMsg
}

def getCommitChangedFiles() {
  return sh (
    script: "git diff --name-only HEAD HEAD~1",
    returnStdout: true
  ).trim()
}

def getLast3CommitDescription() {
  return sh (
    script: "git log --format=%B -n 1 HEAD",
    returnStdout: true
  ).trim()
}

def prepareAll() {
  echo "PREPARING CORE"
  sh 'npm install'
}

def buildAll() {
  echo "BUILDING"
  sh 'npm run build'
}
