/**
 * Created by raymond on 13/1/2017.
 */
export type DebugMenuType = {
  actionItems: Array<DebugMenItemType>,
  toggleStyle?: any,
  menuBackground?: any
}

export type DebugMenItemType = {
  title: string,
  action: Function
}