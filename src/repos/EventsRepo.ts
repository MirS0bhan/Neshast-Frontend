// src/repos/EventsRepo.ts
import { Configuration, EventsApi } from '@/api'
import {config, apiInstance} from '@/plugins/axios'


const eventsApi = new EventsApi(config, config.basePath, apiInstance)

const EventsRepo = {
  getAllEvents: () => eventsApi.eventsList(),
  getAllFeatured: () => eventsApi.eventsFeatured(),
}

export default EventsRepo
