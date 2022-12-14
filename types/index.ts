export enum Minute {
  ZERO = '00',
  ONE = '01',
  TWO = '02',
  THREE = '03',
  FOUR = '04',
  FIVE = '05',
  SIX = '06',
  SEVEN = '07',
  EIGHT = '08',
  NINE = '09',
  TEN = '10',
  ELEVEN = '11',
  TWELVE = '12',
  THIRTEEN = '13',
  FOURTEEN = '14',
  FIFTEEN = '15',
  SIXTEEN = '16',
  SEVENTEEN = '17',
  EIGHTTEEN = '18',
  NINETEEN = '19',
  TWENTY = '20',
  TWENTY_ONE = '21',
  TWENTY_TWO = '22',
  TWENTY_THREE = '23',
  TWENTY_FOUR = '24',
  TWENTY_FIVE = '25',
  TWENTY_SIX = '26',
  TWENTY_SEVEN = '27',
  TWENTY_EIGHT = '28',
  TWENTY_NINE = '29',
  THIRTY = '30',
  THIRTY_ONE = '31',
  THIRTY_TWO = '32',
  THIRTY_THREE = '33',
  THIRTY_FOUR = '34',
  THIRTY_FIVE = '35',
  THIRTY_SIX = '36',
  THIRTY_SEVEN = '37',
  THIRTY_EIGHT = '38',
  THIRTY_NINE = '39',
  FORTY = '40',
  FORTY_ONE = '41',
  FORTY_TWO = '42',
  FORTY_THREE = '43',
  FORTY_FOUR = '44',
  FORTY_FIVE = '45',
  FORTY_SIX = '46',
  FORTY_SEVEN = '47',
  FORTY_EIGHT = '48',
  FORTY_NINE = '49',
  FIFTY = '50',
  FIFTY_ONE = '51',
  FIFTY_TWO = '52',
  FIFTY_THREE = '53',
  FIFTY_FOUR = '54',
  FIFTY_FIVE = '55',
  FIFTY_SIX = '56',
  FIFTY_SEVEN = '57',
  FIFTY_EIGHT = '58',
  FIFTY_NINE = '59',
}

export enum TwelveHour {
  ZERO = '00',
  ONE = '01',
  TWO = '02',
  THREE = '03',
  FOUR = '04',
  FIVE = '05',
  SIX = '06',
  SEVEN = '07',
  EIGHT = '08',
  NINE = '09',
  TEN = '10',
  ELEVEN = '11',
  TWELVE = '12',
}

export enum TwentyFourHour {
  ZERO = '00',
  ONE = '01',
  TWO = '02',
  THREE = '03',
  FOUR = '04',
  FIVE = '05',
  SIX = '06',
  SEVEN = '07',
  EIGHT = '08',
  NINE = '09',
  TEN = '10',
  ELEVEN = '11',
  TWELVE = '12',
  THIRTEEN = '13',
  FOURTEEN = '14',
  FIFTEEN = '15',
  SIXTEEN = '16',
  SEVENTEEN = '17',
  EIGHTTEEN = '18',
  NINETEEN = '19',
  TWENTY = '20',
  TWENTY_ONE = '21',
  TWENTY_TWO = '22',
  TWENTY_THREE = '23',
}

export enum Meridiem {
  PM = 'PM',
  AM = 'AM',
}

export interface TwentyFourHourTime {
  hour: TwentyFourHour;
  minute: Minute;
}

export interface TwelveHourTime {
  hour: TwelveHour;
  minute: Minute;
  meridiem: Meridiem;
}

export enum DropdownPlacement {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum IconPlacement {
  LEFT = 'left',
  RIGHT = 'right',
}
