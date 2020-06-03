import * as api from './api';

describe('DASHBOARD API', () => {
  it('FETCHING TODO LISTS', async () => {
    const data = await api.fetchTodo();
    const res = [
      {
        id: data[0].id,
        title: data[0].title,
      },
    ];

    expect(res).toHaveLength(1);
  });
});
