// @flow
export type DebugMenuType = {
  actionItems: Array<DebugMenItemType>,
  toggleStyle?: any,
  menuBackground?: any
}

export type DebugMenItemType = {
  title: string,
  action: Function,
  keepMenuOnAction: boolean // If set to true, menu won't disappear after action
}