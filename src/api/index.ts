import { Config } from '../utils/config'

const config = Config()

export const getIssues = async () => {
  try {
    const issues = await fetch(`${config.apiEndpoint}/api/find-issues`)
    return await issues.json()
  } catch (err) {
    return []
  }
}
