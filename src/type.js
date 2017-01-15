// @flow
export type DebugMenuType = {
  actionItems: Array<DebugMenItemType>,
  toggleStyle?: any,
  menuBackground?: any
}

export type DebugMenItemType = {
  title: string,
  action: Function
}