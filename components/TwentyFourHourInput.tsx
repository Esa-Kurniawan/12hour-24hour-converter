import { AnimatePresence, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { zoomAnimations } from 'lib/zoomAnimations';
import { MdOutlineSchedule } from 'react-icons/md';

import { Popover } from '@headlessui/react';

import { MINUTES, TWENTY_FOUR_HOURS } from 'data/times';
import { Minute, TwentyFourHour, TwentyFourHourTime } from 'types';

import ListBox from './ListBox';

// framer motion variants naming guidlines: hidden, open, close

interface TwentyFourHourInputProps {
    initialTime: TwentyFourHourTime;
    onChangeMinute: (minute: Minute) => void;
    onChangeHour: (hour: TwentyFourHour) => void;
}

const TwentyFourHourInput = ({
    onChangeHour,
    onChangeMinute,
    initialTime,
}: TwentyFourHourInputProps) => {
    return (
        <Popover className="relative w-full">
            {({ open }) => (
                <>
                    <Popover.Button className="relative py-2 px-3 rounded-lg focus:outline-none bg-slate-800 w-full">
                        <span className="font-medium text-gray-300">
                            {initialTime.hour}:{initialTime.minute}
                        </span>
                        <span className="absolute right-0 inset-y-0 aspect-square grid place-items-center">
                            <MdOutlineSchedule className="pointer-events-none" />
                        </span>
                    </Popover.Button>

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="absolute bg-slate-800/50 left-1/2 -translate-x-1/2 p-4 shadow-lg backdrop-blur bottom-12 rounded-lg z-10"
                                {...zoomAnimations}
                                custom="bottom"
                            >
                                <Popover.Panel
                                    className="flex items-center gap-x-3"
                                    static
                                >
                                    <ListBox
                                        selectedItem={initialTime.hour}
                                        items={TWENTY_FOUR_HOURS}
                                        onChange={onChangeHour}
                                        placement="top"
                                    />
                                    <span className="text-gray-400 select-none cursor-default text-lg">
                                        :
                                    </span>
                                    <ListBox
                                        selectedItem={initialTime.minute}
                                        items={MINUTES}
                                        onChange={onChangeMinute}
                                        placement="top"
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

export default TwentyFourHourInput;
