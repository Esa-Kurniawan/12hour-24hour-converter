import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import { format } from 'date-fns';
import { FaExchangeAlt } from 'react-icons/fa';
import { useUpdateEffect } from 'react-use';
import { useMap } from 'react-use';
import { convertTo24HourTime } from 'utils/convertTo24HourTime';

import Label from 'components/Label';
import TwelveHourInput from 'components/TwelveHourInput';
import TwentyFourHourInput from 'components/TwentyFourHourInput';
import { MINUTES, TWELVE_HOURS, TWENTY_FOUR_HOURS } from 'data/times';
import { Meridiem, TwentyFourHour } from 'types';
import { TwelveHourTime, TwentyFourHourTime } from 'types';

const INITIAL_TWENTY_FOUR_HOUR_TIME: TwentyFourHourTime = {
    hour: TWENTY_FOUR_HOURS[0],
    minute: MINUTES[0],
};

const INITIAL_TWELVE_HOUR_TIME: TwelveHourTime = {
    hour: TWELVE_HOURS[TWELVE_HOURS.length - 1],
    minute: MINUTES[0],
    meridiem: Meridiem.AM,
};

const Home: NextPage = () => {
    const [
        twentyFourHourTime,
        { set: setTwentyFourHourTimeProperty, setAll: setTwentyFourHourTime },
    ] = useMap<TwentyFourHourTime>(INITIAL_TWENTY_FOUR_HOUR_TIME);

    const [
        twelveHourTime,
        { set: setTwelveHourTimeProperty, setAll: setTwelveHourTime },
    ] = useMap<TwelveHourTime>(INITIAL_TWELVE_HOUR_TIME);

    // format from 24 hour time to 12 hour time
    useUpdateEffect(() => {
        // const convertedTime = convertTo24HourTime();
    }, [twentyFourHourTime]);

    // format from 12 hour time to 24 hour time
    useUpdateEffect(() => {
        const convertedToTwentyFourHourTime =
            convertTo24HourTime(twelveHourTime);

        setTwentyFourHourTime(convertedToTwentyFourHourTime);
    }, [twelveHourTime]);

    return (
        <>
            <Head>
                <title>12 Hour from to 24 Hour (Converter)</title>
            </Head>

            <main className="grid place-items-center h-full">
                <div className="grid cols-1 w-9/12 max-w-sm gap-4 shadow-lg p-4">
                    <div className="grid gap-y-1 place-items-center">
                        <Label text="24-hour Time" id="twenty-four-hour-time" />
                        <TwentyFourHourInput
                            initialTime={twentyFourHourTime}
                            onChangeHour={(hour) =>
                                setTwentyFourHourTimeProperty('hour', hour)
                            }
                            onChangeMinute={(minute) =>
                                setTwentyFourHourTimeProperty('minute', minute)
                            }
                        />
                    </div>

                    <div className="grid place-items-center">
                        <FaExchangeAlt color="#2dd4bf" />
                    </div>

                    <div className="grid gap-y-1 place-items-center">
                        <TwelveHourInput
                            initialTime={twelveHourTime}
                            onChangeHour={(hour) =>
                                setTwelveHourTimeProperty('hour', hour)
                            }
                            onChangeMinute={(minute) =>
                                setTwelveHourTimeProperty('minute', minute)
                            }
                            onChangeMeridiem={(meridiem) =>
                                setTwelveHourTimeProperty('meridiem', meridiem)
                            }
                        />
                        <Label text="12-hour Time" id="twelve-hour-time" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
