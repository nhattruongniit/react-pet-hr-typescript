import React, { useRef, useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';

// material core
import IconButton from '@material-ui/core/IconButton';

// material icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// components
import TypographyBase from 'components/atoms/TypographyBase';

// styles
import useStyles from './styles';

const data = [
  {
    id: 1,
    image: '/assets/images/slider-image/1.jpg',
    text: 'img1'
  },
  {
    id: 2,
    image: '/assets/images/slider-image/2.jpg',
    text: 'img2'
  },
  {
    id: 3,
    image: '/assets/images/slider-image/3.jpg',
    text: 'img3'
  },
  {
    id: 4,
    image: '/assets/images/slider-image/4.jpg',
    text: 'img4'
  },
  {
    id: 5,
    image: '/assets/images/slider-image/5.jpg',
    text: 'img5'
  },
  {
    id: 6,
    image: '/assets/images/slider-image/6.jpg',
    text: 'img6'
  },
  {
    id: 7,
    image: '/assets/images/slider-image/7.jpg',
    text: 'img7'
  },
  {
    id: 8,
    image: '/assets/images/slider-image/8.jpg',
    text: 'img8'
  },
  {
    id: 9,
    image: '/assets/images/slider-image/9.jpg',
    text: 'img9'
  },
  {
    id: 10,
    image: '/assets/images/slider-image/10.jpg',
    text: 'img10'
  }

]

type IData = {
  id: number;
  image: string;
  text?: string;
};

let cx = 0;
let cy = 0;
let lensCurrent: any = null;
let imageCurrent: any = null;
let resultCurrent: any = null;

const SliderImage = () => {
  const [index, setIndex] = useState<number>(0);
  const classes = useStyles();
  const selectedImage = data[index];
  const refImage = useRef<any>();
  const refLens = useRef<any>();
  const refResult = useRef<any>();

  const onPrevSlider = useCallback(() => {
    setIndex(prev => (prev - 1 + data.length) % data.length)
  }, [])

  const onNextSlider = useCallback(() => {
    setIndex(prev => (prev + 1) % data.length)
  }, [])

  function getCursorPos(e: React.MouseEvent) {
    let x = 0;
    let y = 0;
    const getBoundingImage = refImage.current.getBoundingClientRect();

    e = e || window.event;
    x = e.pageX - getBoundingImage.left - window.pageXOffset;
    y = e.pageY - getBoundingImage.top - y - window.pageYOffset;

    return { x, y };
  }

  useEffect(() => {
    lensCurrent = refLens.current;
    imageCurrent = refImage.current;
    resultCurrent = refResult.current;

    function moveLens(e: React.MouseEvent) {
      e.preventDefault();
      let x = 0;
      let y = 0;

      const pos = getCursorPos(e);
      x = pos.x - lensCurrent.offsetWidth / 2;
      y = pos.y - lensCurrent.offsetHeight / 2;

      if (x > refImage.current.width - lensCurrent.offsetWidth) {
        x = refImage.current.width - lensCurrent.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > refImage.current.height - lensCurrent.offsetHeight) {
        y = refImage.current.height - lensCurrent.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }

      lensCurrent.style.left = x + 'px';
      lensCurrent.style.top = y + 'px';
      resultCurrent.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px';
    }
    if (imageCurrent !== null) {
      cx = resultCurrent.offsetWidth / lensCurrent.offsetWidth;
      cy = resultCurrent.offsetHeight / lensCurrent.offsetHeight;
      resultCurrent.style.backgroundSize = imageCurrent.width * cx + 'px ' + imageCurrent.height * cy + 'px';

      imageCurrent.addEventListener('mousemove', moveLens, false);
      lensCurrent.addEventListener('mousemove', moveLens, false);
    }
    return () => {
      imageCurrent.removeEventListener('mousemove', moveLens, false);
      lensCurrent.removeEventListener('mousemove', moveLens, false);
    };
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.imgContainer}>
          <div className={classes.areaZoom}>
            <div
              className={classes.lens}
              ref={refLens}
              style={{
                top: 0,
                left: 0,
              }}
            />
            <img src={selectedImage.image} alt="" ref={refImage} />
            <div
              id="result"
              className={classes.imgZoom}
              ref={refResult}
              style={{
                backgroundImage: `url(${selectedImage.image})`,
                backgroundPosition: '-626.21px -429.637px',
              }}
            />
          </div>
          <div className={classes.btnPrev}>
            <IconButton color="primary" component="span" onClick={onPrevSlider}>
              <ArrowBackIcon />
            </IconButton>

          </div>
          <div className={classes.btnNext}>
            <IconButton color="primary" component="span" onClick={onNextSlider}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </div>
        <TypographyBase variant="body2" text={selectedImage.text} />
      </div>
      <ul className={classes.thumbnail}>
        {data.map((image: IData, idx: number) => (
          <li key={idx} className={clsx(selectedImage.id === image.id && classes.isActive)}>
            <img src={image.image} alt="" onClick={() => setIndex(idx)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderImage;
