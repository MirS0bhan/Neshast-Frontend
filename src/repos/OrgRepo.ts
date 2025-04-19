// src/repos/EventsRepo.ts
import { OrganizationApi, OrganizationCreate } from '@/api'
import {config, apiInstance} from '@/plugins/axios'

const orgApi = new OrganizationApi(config, config.basePath, apiInstance)

const OrgRepo = {
  newOrganization: (body: OrganizationCreate) => orgApi.organizationCreate(body)
}

export default OrgRepo
