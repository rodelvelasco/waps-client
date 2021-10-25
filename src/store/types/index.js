// @flow
export type BaseAction = {
  type: string,
  payload: ?any
};

export type DashboardState = {
  dashboard : {
    data: ?Object,
    error: ?string,
    status: ?string
  }
}