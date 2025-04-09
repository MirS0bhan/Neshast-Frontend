import api from '@/plugins/axios'

interface Event {
  id: number;
  name: string;
  date: string;
}

export default {
  async getAllUpcomings() {
    // const { data } = await api.get('/events/upcoming')
    const data: Event[] = [{ id: 1, name: 'Event 1', date: '2023-10-01' }, { id: 2, name: 'Event 2', date: '2023-10-02' },{ id: 2, name: 'Event 2', date: '2023-10-02' },{ id: 2, name: 'Event 2', date: '2023-10-02' }];
    return data
  },
  Event
}