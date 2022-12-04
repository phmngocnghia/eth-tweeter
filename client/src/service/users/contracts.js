import { getStorage } from "./getInstance"

export const getUserInfo = async (userId) => {
  const storage = getStorage()
  const profile = await storage.profiles.call(userId)

  return profile
}