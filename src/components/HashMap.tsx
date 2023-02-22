import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface HashMapProps {
    data: {};
}
interface EntryProps {
    keyValue: number;
}
interface HashMapState {
    entryProps: EntryProps[];
}

class HashMap extends React.Component<HashMapProps, HashMapState> {
    constructor(props: HashMapProps) {
        super(props);

        const entryProps: EntryProps[] = [];
        for (const [key, value] of Object.entries(this.props.data)) {
            let entryprop = {
                keyValue: 3
            };
            if (value !== undefined) {
                entryProps.push(entryprop);
            }
        }
        this.state = {
            entryProps: entryProps
        };
    }

    swapValues = () => {
        let cellProps = [...this.state.entryProps];
        console.log(cellProps);

        //swap first and second elements, 0th and 1st
        let prop1 = cellProps[0];
        let prop2 = cellProps[1];

        cellProps[1] = prop1;
        cellProps[0] = prop2;

        this.setState({ ...this.state, entryProps: cellProps });
        console.log('swapped');
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <table style={{ color: 'black' }}>
                    <thead>
                        <tr>
                            <motion.th>hello</motion.th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence>
                            {this.state.entryProps.map((entryProp) => (
                                <Entry
                                    key={2}
                                    keyValue={entryProp.keyValue}
                                ></Entry>
                            ))}
                            <Entry keyValue={1}></Entry>
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        );
    }
}

class Entry extends React.Component<EntryProps, {}> {
    constructor(props: EntryProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <motion.tr>
                <motion.td>
                    {typeof this.props.keyValue === 'number'
                        ? this.props.keyValue
                        : 500}
                </motion.td>
            </motion.tr>
        );
    }
}
export default HashMap;
