import React, { useState } from "react";
import styled from "styled-components";
import Day from "./Day.jsx";

const DailyDataContainer = styled.div`
    padding: 20px 0px 40px 0px;
`;

const DailyDataHeading = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const DailyDataContent = styled.div`
    display: flex;
    overflow-x: hidden;
    padding-bottom: 20px;
`;

function DailyData({ realtime_weather, unit }) {
    const [selected, changeSelected] = useState(0);
    return (
        <DailyDataContainer>
            <DailyDataHeading>Daily Details</DailyDataHeading>
            <DailyDataContent>
                {realtime_weather.forecast.forecastday.map(function (
                    weather_of_day,
                    index
                ) {
                    if (index === selected) {
                        return (
                            <Day
                                weather_of_day={weather_of_day}
                                unit={unit}
                                selected
                                changeSelected={changeSelected}
                            />
                        );
                    }
                    return (
                        <Day
                            weather_of_day={weather_of_day}
                            unit={unit}
                            selected={false}
                            changeSelected={changeSelected}
                        />
                    );
                })}
            </DailyDataContent>
        </DailyDataContainer>
    );
}

export default DailyData;