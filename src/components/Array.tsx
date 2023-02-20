import { Avatar, Badge, Button } from 'antd';
import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

interface AppProps {
    data: number[];
}
interface State {
    x: number;
    y: number;
    rotation: number;
}

class Array extends React.Component<AppProps, State> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            rotation: 0
        };
    }

    swapValues = () => {
        let x1 = this.props.data[0];
        this.props.data[0] = this.props.data[1];
        this.props.data[1] = x1;
        console.log('swapped');
        this.setState({
            ...this.state,
            x: -this.state.x,
            rotation: this.state.rotation - 180
        });
    };

    render() {
        const cells: React.ReactElement[] = [];
        for (let i = 0; i < this.props.data.length; i++) {
            cells.push(
                <motion.div
                    className="box"
                    animate={{
                        x: this.state.x,
                        y: this.state.y,
                        rotate: this.state.rotation
                    }}
                    transition={{ type: 'just' }}
                    style={{
                        border: '3px dotted black',
                        display: 'inline-block'
                    }}
                >
                    <Badge>
                        <Avatar shape="square" size="large">
                            {this.props.data[i]}
                        </Avatar>
                    </Badge>
                </motion.div>
            );
        }
        return (
            <div>
                {cells}
                <Button onClick={this.swapValues}>swap</Button>
            </div>
        );
    }
}

export default Array;
