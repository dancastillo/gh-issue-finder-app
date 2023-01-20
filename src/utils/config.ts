
export const Config = (): { [key: string]: string } => {
  const envs = {
    apiEndpoint: 'REACT_APP_API_ENDPOINT',
  };

  let missingEnvs= '';
  let configs: { [key: string]: string } = {}
  for (const [ key, value ] of Object.entries(envs)) {
    if (!process.env[value] || !process.env[value]) {
      missingEnvs += ` ${value}`
    } else {
      configs[key] = process.env[value]!
    }
  }

  if (!!missingEnvs) {
    throw new Error(`Missing envs: ${missingEnvs}`)
  }

  return configs
}
