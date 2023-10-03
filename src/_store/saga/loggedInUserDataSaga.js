import { call, put, takeEvery } from "redux-saga/effects";
import { getApi } from "../../_api/_api";
import { FETCH_USER_DETAILS } from "../actions/actions";
import { handleLoggedInUserData } from "../reducer/loggedInUserDetails";
import { apiIdentityUrl, apiYakshaUrl } from "../../_api/_urls";

// ::TODO:: Add Sagas according to requirement && Rename file according the functionality name

// example will replace with the name accordingly
export const currentLoginInfoApi = `${apiIdentityUrl}/services/platform/Session/GetCurrentLoginInformations`;
export const userRolePermissionApi = `${apiYakshaUrl}/services/yaksha/User/GetUserRolePermissions`;
export const allRolesApi = `${apiYakshaUrl}/services/yaksha/Role/GetAllRoles`
export function* fetchUserInfo () {
    try {
        const currentLoginInfoResp = yield call(getApi, currentLoginInfoApi);
        const userRolePermissionsResp = yield call(getApi, userRolePermissionApi);
        const allRolesResp = yield call(getApi, allRolesApi);
        const combineData = {
            currentLoginInfo: currentLoginInfoResp.body, 
            userRolePermissions: userRolePermissionsResp.body,
            allRoles: allRolesResp.body 
        }
        yield put(handleLoggedInUserData(combineData));
    }
    catch (err) {
        console.log(err)
    }
}

export function* watcherLoggedInUserSaga () {
    yield takeEvery(FETCH_USER_DETAILS, fetchUserInfo)
}