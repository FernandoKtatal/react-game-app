export const UploadPageSuccess = page => ({
    type: "UPLOAD_PAGE_SUCCESS",
    payload: {
        page,
    }
});

export const UploadPageRequest = page => ({
    type: "UPLOAD_PAGE_REQUEST",
    payload: {
        page,
    }
});