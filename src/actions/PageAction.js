export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAIL = "GET_PHOTOS_FAIL";

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    });

    //eslint-disable-next-line no-undef
    VK.Api.call(
      "photos.getAll",
      {
        v: 5.92,
        extended: 1,
        count: 200
      },
      r => {
        try {
          let photosOfYear = [];
          r.response.items.forEach((item, i, arr) => {
            if (new Date(item.date * 1000).getFullYear() === year) {
              photosOfYear.push(item);
            }
          });
          photosOfYear.sort((a, b) => {
            return a.likes.count - b.likes.count;
          });

          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: photosOfYear
          });
        } catch {
          dispatch({
            type: GET_PHOTOS_FAIL,
            error: true,
            payload: new Error("Fail to load photos")
          });
        }
      }
    );
  };
}
