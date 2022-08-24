/**
 * This is needed for Github Actions static site building
 * Import this file wherever images are used in the application
 */

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export { prefix };
