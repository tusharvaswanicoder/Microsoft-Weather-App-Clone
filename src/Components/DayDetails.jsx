import React from "react";
import styled from "styled-components";
import { activemoonphases, inactivemoonphases } from "../data";
import DayDetail from "./DayDetail";

const DayDetailsContainer = styled.div``;

const DayDetailsHeading = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const DayDetailsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 25px;
    @media screen and (max-width: 1340px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    @media screen and (max-width: 1030px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, auto);
        align-items: center;
    }
`;

function getMoonPhasesImgs(active) {
    let moonphasesimgurls = [];
    for (let passivemoonphase of inactivemoonphases.keys()) {
        if (passivemoonphase === active) {
            moonphasesimgurls.push(activemoonphases.get(active));
            continue;
        }
        moonphasesimgurls.push(inactivemoonphases.get(passivemoonphase));
    }
    return moonphasesimgurls;
}

function DayDetails({ realtime_weather, unit }) {
    let a = [
        [
            {
                heading: "Wind Speed",
                content: realtime_weather.current.wind_kph,
            },
            {
                heading: "Wind Direction",
                content: `${realtime_weather.current.wind_degree}°${realtime_weather.current.wind_dir}`,
            },
        ],
        [
            {
                heading: "Sunrise",
                contentLogo:
                    "https://ik.imagekit.io/dchud9yflpr/sunrise_yf7tRSjF5.svg?updatedAt=1641458499933",
                content: realtime_weather.forecast.forecastday[0].astro.sunrise,
            },
            {
                heading: "Sunset",
                contentLogo:
                    "https://ik.imagekit.io/dchud9yflpr/sunset_tW2ZbA8cdNFi.svg?updatedAt=1641458499782",
                content: realtime_weather.forecast.forecastday[0].astro.sunset,
            },
        ],
        [
            {
                heading: "Moonrise",
                contentLogo:
                    "https://ik.imagekit.io/dchud9yflpr/moonrise_e64A9HaEW.svg?updatedAt=1641458499432",
                content:
                    realtime_weather.forecast.forecastday[0].astro.moonrise,
            },
            {
                heading: "Moonset",
                contentLogo:
                    "https://ik.imagekit.io/dchud9yflpr/moonset_AVhhCKoj6.svg?updatedAt=1641458499276",
                content: realtime_weather.forecast.forecastday[0].astro.moonset,
            },
            {
                heading: "Moon Phase",
                contentLogoCollection:
                    "https://ik.imagekit.io/dchud9yflpr/moonset_AVhhCKoj6.svg?updatedAt=1641458499276",
            },
            {
                heading:
                    realtime_weather.forecast.forecastday[0].astro.moon_phase,
            },
        ],
        [
            {
                heading: "Air Quality",
            },
            {
                contentDesc: [
                    `CO - ${Math.trunc(
                        realtime_weather.current.air_quality.co
                    )}`,
                    `NO${(<sub>2</sub>)} - ${Math.trunc(
                        realtime_weather.current.air_quality.no2
                    )}`,
                    `O${(<sub>3</sub>)} - ${Math.trunc(
                        realtime_weather.current.air_quality.o3
                    )}`,
                    `SO${(<sub>2</sub>)} - ${Math.trunc(
                        realtime_weather.current.air_quality.so2
                    )}`,
                    `PM2.5 - ${Math.trunc(
                        realtime_weather.current.air_quality.pm2_5
                    )}`,
                    `PM10 - ${Math.trunc(
                        realtime_weather.current.air_quality.pm10
                    )}`,
                ],
            },
        ],
        [
            {
                heading: "Humidity",
                content: `${realtime_weather.current.humidity}%`,
            },
            {
                heading: "Precipitation",
                content: `${realtime_weather.current.precip_mm} mm`,
            },
        ],
    ];
    return (
        <DayDetailsContainer>
            <DayDetailsHeading>Day Details</DayDetailsHeading>
            <DayDetailsContent>
                {/* <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Wind Speed</DayDetailTextHeading>
                        <DayDetailTextContent>
                            {realtime_weather.current.wind_kph}
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>
                            Wind Direction
                        </DayDetailTextHeading>
                        <DayDetailTextContent>
                            {realtime_weather.current.wind_degree}°
                            {realtime_weather.current.wind_dir}
                        </DayDetailTextContent>
                    </DayDetailText>
                </DayDetail>
                <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Sunrise</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <DayDetailTextContentLogo
                                src={
                                    "https://ik.imagekit.io/dchud9yflpr/sunrise_yf7tRSjF5.svg?updatedAt=1641458499933"
                                }
                            />
                            <DayDetailTextContentDesc>
                                {
                                    realtime_weather.forecast.forecastday[0]
                                        .astro.sunrise
                                }
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>Sunset</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <DayDetailTextContentLogo
                                src={
                                    "https://ik.imagekit.io/dchud9yflpr/sunset_tW2ZbA8cdNFi.svg?updatedAt=1641458499782"
                                }
                            />
                            <DayDetailTextContentDesc>
                                {
                                    realtime_weather.forecast.forecastday[0]
                                        .astro.sunset
                                }
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                </DayDetail>
                <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Moonrise</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <DayDetailTextContentLogo
                                src={
                                    "https://ik.imagekit.io/dchud9yflpr/moonrise_e64A9HaEW.svg?updatedAt=1641458499432"
                                }
                            />
                            <DayDetailTextContentDesc>
                                {
                                    realtime_weather.forecast.forecastday[0]
                                        .astro.moonrise
                                }
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>Moonset</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <DayDetailTextContentLogo
                                src={
                                    "https://ik.imagekit.io/dchud9yflpr/moonset_AVhhCKoj6.svg?updatedAt=1641458499276"
                                }
                            />
                            <DayDetailTextContentDesc>
                                {
                                    realtime_weather.forecast.forecastday[0]
                                        .astro.moonset
                                }
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>Moon Phase</DayDetailTextHeading>
                        <DayDetailTextContent
                            style={{ justifyContent: "center" }}
                        >
                            {getMoonPhasesImgs(
                                realtime_weather.forecast.forecastday[0].astro
                                    .moon_phase
                            ).map(function (url, index) {
                                return (
                                    <DayDetailTextContentLogo
                                        src={url}
                                        style={{ width: "20px" }}
                                    />
                                );
                            })}
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>
                            {
                                realtime_weather.forecast.forecastday[0].astro
                                    .moon_phase
                            }
                        </DayDetailTextHeading>
                    </DayDetailText>
                </DayDetail>
                <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Air Quality</DayDetailTextHeading>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextContentDesc>
                            CO -{" "}
                            {Math.trunc(
                                realtime_weather.current.air_quality.co
                            )}
                        </DayDetailTextContentDesc>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextContentDesc>
                            NO<sub>2</sub> -{" "}
                            {Math.trunc(
                                realtime_weather.current.air_quality.no2
                            )}
                        </DayDetailTextContentDesc>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextContentDesc>
                            O<sub>3</sub> -{" "}
                            {Math.trunc(
                                realtime_weather.current.air_quality.o3
                            )}
                        </DayDetailTextContentDesc>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextContentDesc>
                            SO<sub>2</sub> -{" "}
                            {Math.trunc(
                                realtime_weather.current.air_quality.so2
                            )}
                        </DayDetailTextContentDesc>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextContentDesc>
                            PM2.5 -{" "}
                            {Math.trunc(
                                realtime_weather.current.air_quality.pm2_5
                            )}
                        </DayDetailTextContentDesc>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextContentDesc>
                            PM10 -{" "}
                            {Math.trunc(
                                realtime_weather.current.air_quality.pm10
                            )}
                        </DayDetailTextContentDesc>
                    </DayDetailText>
                </DayDetail>
                <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Humidity</DayDetailTextHeading>
                        <DayDetailTextContent>
                            {realtime_weather.current.humidity}%
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>
                            Precipitation
                        </DayDetailTextHeading>
                        <DayDetailTextContent>
                            {realtime_weather.current.precip_mm} mm
                        </DayDetailTextContent>
                    </DayDetailText>
                </DayDetail>
                <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Temperature</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <TemperatureThermometer>
                                <TemperatureThermometerBar>
                                    <MaxTemp>
                                        <TempLine></TempLine>
                                        <TempContent>
                                            {unit === "C"
                                                ? `${Math.trunc(
                                                      realtime_weather.forecast
                                                          .forecastday[0].day
                                                          .maxtemp_c
                                                  )}°C`
                                                : `${Math.trunc(
                                                      realtime_weather.forecast
                                                          .forecastday[0].day
                                                          .maxtemp_f
                                                  )}°F`}
                                        </TempContent>
                                    </MaxTemp>
                                    <AverageTemp>
                                        <TempContent>
                                            {unit === "C"
                                                ? `${Math.trunc(
                                                      realtime_weather.forecast
                                                          .forecastday[0].day
                                                          .avgtemp_c
                                                  )}°C`
                                                : `${Math.trunc(
                                                      realtime_weather.forecast
                                                          .forecastday[0].day
                                                          .avgtemp_f
                                                  )}°F`}
                                        </TempContent>
                                        <TempLine></TempLine>
                                    </AverageTemp>
                                    <MinTemp>
                                        <TempLine></TempLine>
                                        <TempContent>
                                            {unit === "C"
                                                ? `${Math.trunc(
                                                      realtime_weather.forecast
                                                          .forecastday[0].day
                                                          .mintemp_c
                                                  )}°C`
                                                : `${Math.trunc(
                                                      realtime_weather.forecast
                                                          .forecastday[0].day
                                                          .mintemp_f
                                                  )}°F`}
                                        </TempContent>
                                    </MinTemp>
                                </TemperatureThermometerBar>
                                <TemperatureThermometerCircle></TemperatureThermometerCircle>
                            </TemperatureThermometer>
                        </DayDetailTextContent>
                    </DayDetailText>
                </DayDetail> */}
                {a.map((dayDetail) => {
                    return <DayDetail details={dayDetail} />;
                })}
            </DayDetailsContent>
        </DayDetailsContainer>
    );
}

export default DayDetails;
