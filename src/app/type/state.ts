export enum IConnectState {
  MANIPULATING = 'MANIPULATING',
  UNKNOWN = 'UNKNOWN',
  OFFLINE = 'OFFLINE',
  IDLE = 'IDLE',
  READY = 'READY',
  BUSY = 'BUSY',
  PRINTING = 'PRINTING',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
  ATTENTION = 'ATTENTION',
  SPARE1 = 'SPARE1',
  SPARE2 = 'SPARE2',
}

export enum IStatePrimaryColor {
  UNKNOWN = '#FFFFFF',
  OFFLINE = '#E5E5E5',
  IDLE = '#FFFFFF',
  READY = '#D1E9CE',
  BUSY = '#DEC6DF',
  PRINTING = '#EFF4FB',
  PAUSED = '#95A5DE',
  STOPPED = '#D1E9CE',
  FINISHED = '#FFFFFF',
  ERROR = '#F3BBBE',
  ATTENTION = '#FCD6C0',
}

export enum IStateSecondaryColor {
  UNKNOWN = '#E5E5E5',
  OFFLINE = '#E5E5E5',
  IDLE = '#ADADAD',
  READY = '#E8F4E6',
  BUSY = '#e879f9',
  PRINTING = '#DEE9F6',
  PAUSED = '#E0E3EE',
  STOPPED = '#E8F4E6',
  FINISHED = '#E8F4E6',
  ERROR = '#F9DDDE',
  ATTENTION = '#FEEADF',
}

export enum IStateBaseColor {
  UNKNOWN = '#9daabd',
  OFFLINE = '#adadad',
  IDLE = '#deea6e',
  READY = '#92c78c',
  BUSY = '#d5a585',
  PRINTING = '#7da7d9',
  PAUSED = '#c396c4',
  STOPPED = '#f8795f',
  FINISHED = '#a1ea70',
  ERROR = '#dd7b7d',
  ATTENTION = '#f59c66',
  SPARE1 = '#fddc71',
  SPARE2 = '#5fe7f8',
}

export type IStateProperties = {
  state: IConnectState
  primaryColor: string
  secondaryColor: string
  baseColor: string
  default: boolean
}

const UNKNOWN_STATE: IStateProperties = {
  state: IConnectState.UNKNOWN,
  primaryColor: IStatePrimaryColor.UNKNOWN,
  secondaryColor: IStateSecondaryColor.UNKNOWN,
  baseColor: IStateBaseColor.UNKNOWN,
  default: false,
}

export const states: IStateProperties[] = [
  UNKNOWN_STATE,
  {
    state: IConnectState.OFFLINE,
    primaryColor: IStatePrimaryColor.OFFLINE,
    secondaryColor: IStateSecondaryColor.OFFLINE,
    baseColor: IStateBaseColor.OFFLINE,
    default: true,
  },
  {
    state: IConnectState.IDLE,
    primaryColor: IStatePrimaryColor.IDLE,
    secondaryColor: IStateSecondaryColor.IDLE,
    baseColor: IStateBaseColor.IDLE,
    default: false,
  },
  {
    state: IConnectState.READY,
    primaryColor: IStatePrimaryColor.READY,
    secondaryColor: IStateSecondaryColor.READY,
    baseColor: IStateBaseColor.READY,
    default: false,
  },
  {
    state: IConnectState.PRINTING,
    primaryColor: IStatePrimaryColor.PRINTING,
    secondaryColor: IStateSecondaryColor.PRINTING,
    baseColor: IStateBaseColor.PRINTING,
    default: false,
  },
  {
    state: IConnectState.PAUSED,
    primaryColor: IStatePrimaryColor.PAUSED,
    secondaryColor: IStateSecondaryColor.PAUSED,
    baseColor: IStateBaseColor.PAUSED,
    default: false,
  },
  {
    state: IConnectState.STOPPED,
    primaryColor: IStatePrimaryColor.STOPPED,
    secondaryColor: IStateSecondaryColor.STOPPED,
    baseColor: IStateBaseColor.STOPPED,
    default: false,
  },
  {
    state: IConnectState.FINISHED,
    primaryColor: IStatePrimaryColor.FINISHED,
    secondaryColor: IStateSecondaryColor.FINISHED,
    baseColor: IStateBaseColor.FINISHED,
    default: false,
  },
  {
    state: IConnectState.ERROR,
    primaryColor: IStatePrimaryColor.ERROR,
    secondaryColor: IStateSecondaryColor.ERROR,
    baseColor: IStateBaseColor.ERROR,
    default: false,
  },
  {
    state: IConnectState.BUSY,
    primaryColor: IStatePrimaryColor.BUSY,
    secondaryColor: IStateSecondaryColor.BUSY,
    baseColor: IStateBaseColor.BUSY,
    default: false,
  },
  {
    state: IConnectState.ATTENTION,
    primaryColor: IStatePrimaryColor.ATTENTION,
    secondaryColor: IStateSecondaryColor.ATTENTION,
    baseColor: IStateBaseColor.ATTENTION,
    default: false,
  },
]

export const isActiveState = (state: IConnectState) => state !== IConnectState.UNKNOWN && state !== IConnectState.OFFLINE

export function getState(state: IConnectState) {
  return states.find((s) => s.state === state) || UNKNOWN_STATE
}

export function isState(possible: string): possible is IConnectState {
  return Object.values(IConnectState).includes(possible as IConnectState)
}
