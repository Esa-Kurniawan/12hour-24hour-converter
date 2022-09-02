import { useRef } from 'react';

import { AnimatePresence, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { MdOutlineSchedule } from 'react-icons/md';

import { Popover } from '@headlessui/react';

import { MINUTES, TWELVE_HOURS, TWENTY_FOUR_HOURS } from '../data/times';
import { leftToRightSlideAnimations } from '../lib/leftToRightSlideAnimations';
import {
    Meridiem,
    Minute,
    TwelveHour,
    TwelveHourTime,
    TwentyFourHour,
    TwentyFourHourTime,
} from '../types';
import ButtonPrimary from './ButtonPrimary';
import ListBox from './ListBox';
import ZoomTransition from './ZoomTransition';

// framer motion variants naming guidlines: hidden, open, close

interface TwelveHourInputProps {
    initialTime: TwelveHourTime;
    onChangeMinute: (minute: Minute) => void;
    onChangeHour: (hour: TwelveHour) => void;
    onChangeMeridiem: (meridiem: Meridiem) => void;
}

const TwelveHourInput = ({
    onChangeHour,
    onChangeMinute,
    initialTime,
    onChangeMeridiem,
}: TwelveHourInputProps) => {
    console.log(initialTime.hour);
    return (
        <Popover className="relative w-full">
            {({ open }) => (
                <>
                    <Popover.Button className="relative py-2 px-3 rounded-lg focus:outline-none bg-slate-800 w-full">
                        <span className="font-medium text-gray-300">
                            {initialTime.hour} : {initialTime.minute}{' '}
                            {initialTime.meridiem}{' '}
                        </span>
                        <span className="absolute right-0 inset-y-0 aspect-square grid place-items-center">
                            <MdOutlineSchedule className="pointer-events-none" />
                        </span>
                    </Popover.Button>

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="absolute bg-slate-800/50 right-1/2 p-4 shadow-lg backdrop-blur top-12 rounded-lg z-10"
                                {...leftToRightSlideAnimations}
                            >
                                <Popover.Panel
                                    className="flex items-center gap-x-3"
                                    static
                                >
                                    <ListBox
                                        selectedItem={initialTime.hour}
                                        items={TWELVE_HOURS}
                                        onChange={onChangeHour}
                                    />
                                    <span className="text-gray-400 cursor-default select-none text-lg">
                                        :
                                    </span>
                                    <ListBox
                                        selectedItem={initialTime.minute}
                                        items={MINUTES}
                                        onChange={onChangeMinute}
                                    />

                                    <ListBox
                                        selectedItem={initialTime.meridiem}
                                        items={Object.values(Meridiem)}
                                        onChange={onChangeMeridiem}
                                    />
                                </Popover.Panel>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Popover>
    );
};

export default TwelveHourInput;
