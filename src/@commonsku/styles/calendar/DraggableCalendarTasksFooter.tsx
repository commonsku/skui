import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import { getWeek } from 'date-fns';
import { Row, Col, } from '../FlexboxGrid';
import { CalendarTask } from '../Task';
import HeaderWrapper from './HeaderWrapper';
import { draggableChildWrapperProps } from './styles';

export type DraggableCalendarTasksFooterProps = {
    onNextWeek: VoidFunction;
    onPrevWeek: VoidFunction;
    onNextMonth: VoidFunction;
    onPrevMonth: VoidFunction;
    currentMonth: Date;
    currentWeek: number;
    selectedDate: Date;
    [key: string]: any;
};
export const DraggableCalendarTasksFooter = ({
    currentWeek,
    tasks=[],
}: React.PropsWithChildren<DraggableCalendarTasksFooterProps>) => {
    return (
        <HeaderWrapper>
            <Col start xs>
            <span style={{display: 'inline-flex'}}>Past Weeks: </span>
            <span style={{display: 'inline-flex'}}>
                <Row>
                    {tasks
                        .map((t, j) => (
                            <Draggable key={'footer-task-' + j}
                                draggableId={'footer-task-' + j}
                                index={j}
                            >
                                {(provided, snapshot) => (
                                    <Col xs md={3} padded {...draggableChildWrapperProps(provided, snapshot)}>
                                        <CalendarTask {...t} date="" />
                                    </Col>
                                )}
                            </Draggable>
                        ))}
                </Row>  
            </span>
            </Col>
        </HeaderWrapper>
    );
};

export default DraggableCalendarTasksFooter;
