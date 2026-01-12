// Simple in-memory storage for demonstration purposes.
// In production, replace this with the actual Database calls.

global.uploads = global.uploads || {};

export const saveUpload = (id, data) => {
  global.uploads[id] = data;
};

export const getUpload = (id) => {
  return global.uploads[id];
};

export const updateUploadStage = (id, stage, progress) => {
  if (global.uploads[id]) {
    global.uploads[id].stage = stage;
    global.uploads[id].progress = progress;
    global.uploads[id].updatedAt = new Date();
  }
};

export const getAllUploads = () => {
    return Object.values(global.uploads);
}

export const deleteUpload = (id) => {
    delete global.uploads[id];
}
