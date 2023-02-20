import { Avatar, Badge, Button } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';

interface ArrayProps {
    data: number[];
}
interface CellProps {
    x: number;
    y: number;
    rotation: number;
    data: number;
}
interface ArrayState {
    cellProps: CellProps[];
    cells: React.ReactElement[];
}

class Array extends React.Component<ArrayProps, ArrayState> {
    constructor(props: ArrayProps) {
        super(props);

        const cellProps: CellProps[] = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let cellProp: CellProps = {
                data: this.props.data[i],
                rotation: 0,
                x: 0,
                y: 0
            };
            cellProps.push(cellProp);
        }
        this.state = {
            cellProps: cellProps,
            cells: []
        };
    }

    dict: { [id: number]: React.ReactElement } = {};

    // componentDidMount() {
    //     const cells: React.ReactElement[] = [];
    //     for (let i = 0; i < this.props.data.length; i++) {
    //         let element = (
    //             <Cell
    //                 data={this.state.cellProps[i].data}
    //                 x={this.state.cellProps[i].x}
    //                 y={this.state.cellProps[i].y}
    //                 rotation={this.state.cellProps[i].rotation}
    //             ></Cell>
    //         );
    //         this.dict[i] = element;
    //         cells.push(element);
    //     }
    //     this.setState({ cellProps: cellProps, cells: cells });
    // }

    swapValues = () => {
        let cellProps = [...this.state.cellProps];
        console.log(cellProps);

        //swap first and second elements, 0th and 1st
        let element1 = cellProps[0];
        let element2 = cellProps[1];
        //update the cells props
        let temp = element1.data;
        element1.data = element2.data;
        element2.data = temp;

        //update pos
        element1.x = element1.x + 50;
        element2.x = element2.x - 50;

        cellProps[0] = element1;
        cellProps[1] = element2;

        this.setState({ ...this.state, cellProps: cellProps });
        console.log('swapped');
        console.log(this.state);
    };

    render() {
        let cells = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let cellProp: CellProps = this.state.cellProps[i];
            let element = (
                <Cell
                    data={cellProp.data}
                    x={cellProp.x}
                    y={cellProp.y}
                    rotation={cellProp.rotation}
                ></Cell>
            );
            cells.push(element);
        }
        return (
            <div>
                {cells}
                <Button onClick={this.swapValues}>swap</Button>
            </div>
        );
    }
}

class Cell extends React.Component<CellProps, {}> {
    constructor(props: CellProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <motion.div
                className="box"
                animate={{
                    x: this.props.x,
                    y: this.props.y,
                    rotate: this.props.rotation
                }}
                transition={{ type: 'just' }}
                style={{
                    border: '3px dotted black',
                    display: 'inline-block'
                }}
            >
                <Badge>
                    <Avatar shape="square" size="large">
                        {this.props.data}
                    </Avatar>
                </Badge>
            </motion.div>
        );
    }
}
export default Array;
