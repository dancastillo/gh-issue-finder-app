import { Config } from '../utils/config'

const config = Config()

const constructQueryString = (orgs: string[], labels: string[]) => {
  const orgsQueryStr = `org=${orgs[0]}`

  let labelsQueryStr = '';
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i]
    labelsQueryStr += `labels=${label}`
    if (i < labels.length - 1) {
      labelsQueryStr += '&'
    }
  }

  if (!orgs[0] || !labelsQueryStr) {
    return ''
  }
  return `${orgsQueryStr}&${labelsQueryStr}`
}

export const getIssues = async (orgs: string[], labels: string[]) => {
  try {
    const queryStr = constructQueryString(orgs, labels)
    const issues = await fetch(`${config.apiEndpoint}/api/find-issues?${queryStr}`)
    return await issues.json()
  } catch (err) {
    return []
  }
}

