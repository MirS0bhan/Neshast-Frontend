// src/repos/EventsRepo.ts
import { Configuration, EventsApi } from '@/api'
import apiInstance from '@/plugins/axios'

const config = new Configuration()
const eventsApi = new EventsApi(config, config.basePath, apiInstance)

const EventsRepo = {
  getAllEvents: () => eventsApi.eventsList(),
  getAllFeatured: () => eventsApi.eventsFeatured(),
}

export default EventsRepo
