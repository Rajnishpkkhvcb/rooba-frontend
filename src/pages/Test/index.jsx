import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const TestPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[1042px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="font-switzer sm:h-[2286px] h-[2288px] md:h-[3061px] md:px-5 relative w-full">
            <div className="sm:h-[2286px] h-[2288px] md:h-[3061px] m-auto w-full">
              <div className="sm:h-[2286px] h-[2288px] md:h-[3061px] m-auto w-full">
                <div className="bg-gray-900 flex flex-col h-full items-center justify-end m-auto p-[143px] md:px-10 sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[140px] mt-[717px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[26px] items-end justify-start md:mt-0 mt-[870px] w-[2%] md:w-full">
                      <Text
                        className="text-[10px] text-gray-100_7f tracking-[-0.20px]"
                        size="txtSwitzerRegular10"
                      >
                        <span className="text-gray-100_7f font-switzer text-left font-bold">
                          10
                        </span>
                        <span className="text-gray-100_7f font-switzer text-left font-thin">
                          x
                        </span>
                      </Text>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[10px] text-gray-100_7f tracking-[-0.20px]"
                          size="txtSwitzerRegular10"
                        >
                          8x
                        </Text>
                        <Text
                          className="mt-6 text-[10px] text-gray-100_7f tracking-[-0.20px]"
                          size="txtSwitzerRegular10"
                        >
                          6x
                        </Text>
                        <Text
                          className="mt-[26px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                          size="txtSwitzerRegular10"
                        >
                          4x
                        </Text>
                        <Text
                          className="mt-[29px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                          size="txtSwitzerRegular10"
                        >
                          2x
                        </Text>
                        <Text
                          className="ml-1.5 md:ml-[0] mt-[22px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                          size="txtSwitzerRegular10"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[296px] items-center justify-start ml-1 md:ml-[0] md:mt-0 mt-[83px] w-2/5 md:w-full">
                      <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px]"
                          size="txtSwitzerExtralight36"
                        >
                          Discover
                        </Text>
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px]"
                          size="txtSwitzerMedium36"
                        >
                          Prime Opportunities
                        </Text>
                        <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-[47px] w-[98%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-indigo-A200 text-sm tracking-[-0.42px]"
                              size="txtSwitzerMedium14"
                            >
                              Greensteps I
                            </Text>
                            <Line className="bg-indigo-A200 h-1 mt-[3px] w-full" />
                          </div>
                          <Text
                            className="text-sm text-white-A700_66 tracking-[-0.42px]"
                            size="txtSwitzerMedium14WhiteA70066"
                          >
                            Greensteps II
                          </Text>
                          <Text
                            className="text-sm text-white-A700_66 tracking-[-0.42px]"
                            size="txtSwitzerMedium14WhiteA70066"
                          >
                            Greensteps III
                          </Text>
                        </div>
                        <Text
                          className="ml-1 md:ml-[0] mt-[54px] text-gray-100_bf text-sm"
                          size="txtSwitzerRegular14"
                        >
                          <span className="text-gray-100_bf font-switzer text-left font-normal">
                            In a world where the hustle and bustle of a
                            metropolitan city can wear you down, everyone
                            deserves a place to escape to—{" "}
                          </span>
                          <span className="text-gray-100_bf font-switzer text-left font-semibold">
                            <>a real &#39;home away from home.&#39;</>
                          </span>
                          <span className="text-gray-100_bf font-switzer text-left font-normal">
                            <>
                              {" "}
                              <br />
                              <br />
                              That&#39;s precisely what we&#39;re here to offer
                              you. Our carefully curated real estate
                              opportunities provide you with the perfect retreat
                              from the urban chaos, all while potentially
                              securing a solid investment in your future. <br />
                            </>
                          </span>
                        </Text>
                        <div className="flex flex-row gap-[9px] items-center justify-start md:ml-[0] ml-[7px] mt-[23px] w-[30%] md:w-full">
                          <a
                            href="javascript:"
                            className="text-sm text-white-A700 tracking-[-0.42px]"
                          >
                            <Text size="txtSwitzerMedium14WhiteA700">
                              Learn More
                            </Text>
                          </a>
                          <Img
                            className="h-px"
                            src="images/img_arrow2.svg"
                            alt="arrowTwo"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[10px] text-white-A700"
                          size="txtSwitzerMedium10"
                        >
                          Private Equity Index vs S&P 500 Index -- Historical
                          Performance
                        </Text>
                        <div className="h-[247px] md:h-[254px] ml-1 md:ml-[0] mt-[11px] relative w-full">
                          <div className="md:h-[243px] h-[247px] m-auto w-full">
                            <Img
                              className="absolute h-[243px] inset-[0] justify-center m-auto"
                              src="images/img_vector187.svg"
                              alt="vector187"
                            />
                            <Img
                              className="absolute h-[221px] inset-x-[0] mx-auto rounded-[1px] top-[0]"
                              src="images/img_vector188.svg"
                              alt="vector188"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[7%] h-[60px] inset-x-[0] mx-auto rounded-[1px]"
                            src="images/img_vector189.svg"
                            alt="vector189"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-3 md:ml-[0] mt-[5px] w-[89%] md:w-full">
                          <Text
                            className="text-[10px] text-gray-100_7f tracking-[-0.20px]"
                            size="txtSwitzerRegular10"
                          >
                            2001
                          </Text>
                          <Text
                            className="h-3.5 sm:ml-[0] ml-[47px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                            size="txtSwitzerRegular10"
                          >
                            ‘04
                          </Text>
                          <Text
                            className="h-3.5 sm:ml-[0] ml-[47px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                            size="txtSwitzerRegular10"
                          >
                            ‘07
                          </Text>
                          <Text
                            className="h-3.5 sm:ml-[0] ml-[47px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                            size="txtSwitzerRegular10"
                          >
                            ‘10
                          </Text>
                          <Text
                            className="h-3.5 sm:ml-[0] ml-[47px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                            size="txtSwitzerRegular10"
                          >
                            ‘13
                          </Text>
                          <Text
                            className="h-3.5 sm:ml-[0] ml-[47px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                            size="txtSwitzerRegular10"
                          >
                            ‘16
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[47px] text-[10px] text-gray-100_7f tracking-[-0.20px]"
                            size="txtSwitzerRegular10"
                          >
                            ‘19’20
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start ml-3.5 md:ml-[0] mt-7 w-[49%] md:w-full">
                          <div className="bg-indigo-A200 h-[7px] my-[3px] w-[7px]"></div>
                          <Text
                            className="ml-[7px] text-[10px] text-white-A700"
                            size="txtSwitzerMedium10"
                          >
                            Private Equity Index{" "}
                          </Text>
                          <div className="bg-indigo-500 h-[7px] ml-8 my-[3px] w-[7px]"></div>
                          <Text
                            className="ml-[7px] text-[10px] text-white-A700"
                            size="txtSwitzerMedium10"
                          >
                            S&P 500 Index{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[120px] w-[48%] md:w-full">
                      <div className="bg-gray-100 flex flex-col font-switzer items-start justify-end p-[22px] sm:px-5 rounded-sm w-[93%] md:w-full">
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px] mt-[196px] w-[77%] md:w-full">
                          <Text
                            className="text-black-900_33 text-xs"
                            size="txtSwitzerRegular12"
                          >
                            Tags
                          </Text>
                          <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] mt-0.5 w-[78%] md:w-full">
                            <div className="bg-gray-900_19 border border-gray-900_01 border-solid flex flex-col items-center justify-start pt-0.5 px-0.5 rounded-sm w-[28%]">
                              <div className="flex flex-row gap-2 items-start justify-start w-[98%] md:w-full">
                                <div className="flex flex-col h-2 items-center justify-start mt-0.5 w-2">
                                  <div className="flex flex-row items-center justify-evenly w-full">
                                    <Img
                                      className="h-[3px] rounded-[1px] w-1"
                                      src="images/img_vector174.svg"
                                      alt="vector174"
                                    />
                                    <Img
                                      className="h-[3px] rounded-[1px] w-[3px]"
                                      src="images/img_vector174.svg"
                                      alt="vector175"
                                    />
                                  </div>
                                  <div className="flex flex-row items-center justify-evenly w-full">
                                    <Img
                                      className="h-[3px] rounded-[1px] w-[3px]"
                                      src="images/img_vector174.svg"
                                      alt="vector176"
                                    />
                                    <Img
                                      className="h-[3px] rounded-[1px] w-1"
                                      src="images/img_vector174.svg"
                                      alt="vector177"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="text-[10px] text-gray-900_01"
                                  size="txtSwitzerRegular10Gray90001"
                                >
                                  Regular plot
                                </Text>
                              </div>
                            </div>
                            <div className="bg-gray-900_19 border border-gray-900_01 border-solid flex flex-col items-center justify-start ml-[3px] pt-0.5 px-0.5 rounded-sm w-[28%]">
                              <div className="flex flex-row gap-[9px] items-start justify-start w-[91%] md:w-full">
                                <List
                                  className="flex flex-col gap-px mt-0.5 w-1.5"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-row items-center justify-evenly w-full">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_arrow12.svg"
                                      alt="arrowTwelve"
                                    />
                                    <Img
                                      className="h-0.5 w-0.5"
                                      src="images/img_arrow11.svg"
                                      alt="arrowEleven"
                                    />
                                  </div>
                                  <div className="flex flex-row items-center justify-evenly w-full">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_arrow14.svg"
                                      alt="arrowFourteen"
                                    />
                                    <Img
                                      className="h-0.5 w-0.5"
                                      src="images/img_arrow11.svg"
                                      alt="arrowThirteen"
                                    />
                                  </div>
                                </List>
                                <Text
                                  className="text-[10px] text-gray-900_01"
                                  size="txtSwitzerRegular10Gray90001"
                                >
                                  2,970 Sq ft*
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="bg-blue_gray-900 border border-indigo-500 border-solid h-[17px] justify-center ml-[3px] px-[9px] rounded-sm text-[10px] text-white-A700 w-[117px]"
                              size="txtSwitzerRegular10WhiteA700"
                            >
                              Fractional Ownership
                            </Text>
                          </div>
                          <Text
                            className="mt-[17px] text-black-900_33 text-xs"
                            size="txtSwitzerRegular12"
                          >
                            Other Tags
                          </Text>
                          <div className="flex flex-row gap-[5px] items-center justify-start ml-0.5 md:ml-[0] mt-0.5 w-[53%] md:w-full">
                            <Input
                              name="language_Three"
                              placeholder="Electricity "
                              className="leading-[normal] p-0 placeholder:text-gray-900_4c text-[10px] text-left w-full"
                              wrapClassName="border border-gray-900_0c border-solid flex w-2/5"
                              prefix={
                                <div className="mt-px mb-0.5 mr-[9px] sm:w-full sm:mx-0 w-[4%] bg-gray-400 rounded-[1px]">
                                  <Img
                                    className="rounded-[1px] my-auto"
                                    src="images/img_save.svg"
                                    alt="save"
                                  />
                                </div>
                              }
                              shape="round"
                              color="gray_100"
                              size="xs"
                              variant="fill"
                            ></Input>
                            <Button
                              className="border border-gray-900_0c border-solid cursor-pointer flex items-center justify-center min-w-[109px]"
                              leftIcon={
                                <Img
                                  className="mb-0.5 mr-[11px]"
                                  src="images/img_settings.svg"
                                  alt="settings"
                                />
                              }
                            >
                              <div className="leading-[normal] text-[10px] text-left">
                                Agricultural Land
                              </div>
                            </Button>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start ml-0.5 md:ml-[0] mt-[5px] w-[54%] md:w-full">
                            <Button
                              className="border border-gray-900_0c border-solid cursor-pointer flex items-center justify-center min-w-[130px]"
                              leftIcon={
                                <Img
                                  className="h-2.5 mt-px mb-0.5 mr-[7px]"
                                  src="images/img_user.svg"
                                  alt="user"
                                />
                              }
                            >
                              <div className="leading-[normal] text-[10px] text-left">
                                Maintenance Inclusive{" "}
                              </div>
                            </Button>
                            <Button
                              className="border border-gray-900_0c border-solid cursor-pointer flex items-center justify-center min-w-[57px]"
                              leftIcon={
                                <Img
                                  className="h-[7px] mt-[3px] mb-0.5 mr-[9px]"
                                  src="images/img_contrast.svg"
                                  alt="contrast"
                                />
                              }
                            >
                              <div className="leading-[normal] text-[10px] text-left">
                                Fence
                              </div>
                            </Button>
                          </div>
                          <Text
                            className="mt-[15px] text-black-900_33 text-xs"
                            size="txtSwitzerRegular12"
                          >
                            Price
                          </Text>
                          <div className="flex flex-row gap-[7px] items-start justify-between mt-0.5 w-full">
                            <div className="md:h-[76px] h-[82px] relative w-[66%]">
                              <div className="absolute flex flex-row gap-[7px] inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
                                <div className="border border-gray-900_0c border-solid h-[76px] rounded-sm w-[49%]"></div>
                                <div className="flex h-[76px] justify-end relative w-[49%]">
                                  <Text
                                    className="mb-0.5 ml-3.5 mt-auto text-base text-black-900"
                                    size="txtSwitzerSemibold16"
                                  >
                                    <span className="text-black-900 font-switzer text-left font-semibold">
                                      2900/{" "}
                                    </span>
                                    <span className="text-black-900 font-switzer text-left text-xs font-medium">
                                      Sq yd
                                    </span>
                                  </Text>
                                  <div className="absolute border border-gray-900_0c border-solid h-[76px] inset-[0] justify-center m-auto rounded-sm w-full"></div>
                                </div>
                              </div>
                              <Text
                                className="absolute bottom-[0] leading-[14.00px] left-[5%] text-base text-black-900"
                                size="txtSwitzerSemibold16"
                              >
                                <>
                                  INR <br />
                                  1.75 Cr
                                </>
                              </Text>
                            </div>
                            <div className="bg-indigo-A200_19 border border-indigo-500 border-solid flex flex-col items-center justify-end mb-1.5 p-0.5 rounded-sm">
                              <Text
                                className="leading-[14.00px] mt-9 text-base text-gray-100"
                                size="txtSwitzerSemibold16Gray100"
                              >
                                <span className="text-indigo-500 font-switzer text-left text-xs font-normal">
                                  INR
                                </span>
                                <span className="text-indigo-500 font-switzer text-left font-semibold">
                                  <>
                                    {" "}
                                    <br />
                                    5,00,000
                                  </>
                                </span>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-start mt-[41px] w-[72%] md:w-full">
                            <Button
                              className="border border-indigo-A200 border-solid cursor-pointer font-medium leading-[normal] min-w-[124px] text-base text-center"
                              shape="square"
                              color="gray_900_02"
                              size="sm"
                            >
                              + Invest Now
                            </Button>
                            <div className="border border-black-900 border-solid flex flex-row gap-[9px] items-center justify-center p-[7px] w-1/2">
                              <Img
                                className="h-3.5 ml-3 rounded-[1px]"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <a
                                href="javascript:"
                                className="mr-5 text-gray-900_01 text-xs tracking-[-0.24px]"
                              >
                                <Text size="txtSwitzerMedium12">
                                  Contact Us
                                </Text>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="mt-[118px] md:text-5xl text-[64px] text-white-A700"
                        size="txtIvyPrestoDisplayThin64"
                      >
                        Access
                      </Text>
                      <Text
                        className="italic md:text-5xl text-[64px] text-white-A700"
                        size="txtIvyPrestoDisplayLightItalic64"
                      >
                        Alternative{" "}
                      </Text>
                      <Text
                        className="md:text-5xl text-[64px] text-white-A700"
                        size="txtIvyPrestoDisplayThin64"
                      >
                        Investments
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[500px] object-cover right-[0] w-[43%]"
                  src="images/img_screenshot20240120.png"
                  alt="screenshot20240"
                />
              </div>
              <div className="absolute bottom-[8%] h-[325px] right-[15%] w-[30%] sm:w-full">
                <Text
                  className="m-auto text-base text-white-A700"
                  size="txtSwitzerRegular16"
                >
                  <>
                    Unleashing the untapped potential of the alternative markets
                    through Rooba.Finance - Your gateway to superior returns and
                    exclusive opportunities
                    <br />
                    <br />
                    Discover the advantages of alternative market investments,
                    unlock new horizons, and embark on a journey towards
                    financial prosperity with our platform as your trusted
                    partner.{" "}
                  </>
                </Text>
                <div className="absolute bottom-[2%] flex flex-row gap-7 items-center justify-center left-[9%] w-[31%]">
                  <a
                    href="javascript:"
                    className="text-sm text-white-A700 tracking-[-0.42px]"
                  >
                    <Text size="txtSwitzerMedium14WhiteA700">Learn More</Text>
                  </a>
                  <Img
                    className="h-px"
                    src="images/img_arrow2.svg"
                    alt="arrowFifteen"
                  />
                </div>
                <Text
                  className="absolute bg-gray-100_19 border border-solid border-white-A700_4c bottom-[26%] h-[21px] justify-center left-[0] sm:pl-5 pl-7 pr-[5px] py-[3px] rounded-sm text-[10px] text-white-A700 w-24"
                  size="txtSwitzerRegular10WhiteA700"
                >
                  Private Equity{" "}
                </Text>
                <div className="absolute bottom-[26%] flex flex-row gap-[5px] items-center justify-center right-[12%] w-[65%]">
                  <Text
                    className="bg-gray-100_19 border border-solid border-white-A700_4c h-[21px] justify-center sm:pl-5 pl-7 pr-3 py-[3px] rounded-sm text-[10px] text-white-A700 w-24"
                    size="txtSwitzerRegular10WhiteA700"
                  >
                    Private Debt{" "}
                  </Text>
                  <Text
                    className="bg-gray-100_19 border border-solid border-white-A700_4c h-[21px] justify-center sm:pl-5 pl-7 pr-[7px] py-[3px] rounded-sm text-[10px] text-white-A700 w-44"
                    size="txtSwitzerRegular10WhiteA700"
                  >
                    Investment Management Firms
                  </Text>
                </div>
              </div>
              <div className="absolute h-[860px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="h-[860px] m-auto w-full">
                  <Img
                    className="h-[860px] m-auto object-cover w-full"
                    src="images/img_screenshot20240120_860x1440.png"
                    alt="screenshot20240_One"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[506px] justify-start right-[30%] top-[4%]">
                    <Text
                      className="md:ml-[0] ml-[387px] text-base text-center text-gray-100_bf"
                      size="txtSwitzerMedium16"
                    >
                      <span className="text-gray-100_bf font-switzer font-normal">
                        <>
                          <br />
                        </>
                      </span>
                      {/* <span className="text-gray-100_bf tracking-[-0.48px] font-switzer font-normal">
                        How it Works
                      </span> */}
                    </Text>
                    <Text
                      className="mr-[109px] text-base text-center text-white-A700"
                      size="txtSwitzerMedium16WhiteA700"
                    >
                      <span className="text-white-A700 font-switzer font-medium">
                        <>
                          <br />
                          Dive into alternative markets with us and set your
                          capital on the path of{" "}
                        </>
                      </span>
                      <a
                        href="javascript:"
                        className="text-white-A700 font-switzer font-medium underline"
                      >
                        unparalleled growth.{" "}
                      </a>
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-end justify-start mx-auto top-[5%] w-[90%]">
                  <div className="flex sm:flex-col flex-row font-switzer sm:gap-5 items-start justify-end w-full">
                    <Img
                      className="sm:flex-1 h-[37px] md:h-auto sm:mt-0 mt-[3px] object-cover w-[8%] sm:w-full"
                      src="images/img_roobawhite3.png"
                      alt="roobawhiteThree"
                    />
                    <Text
                      className="sm:ml-[0] ml-[569px] sm:mt-0 mt-2.5 text-base text-center text-gray-100_bf"
                      size="txtSwitzerRegular16Gray100bf"
                    >
                      Opportunities{" "}
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[23px] sm:mt-0 mt-2.5 text-base text-center text-gray-100_bf"
                      size="txtSwitzerRegular16Gray100bf"
                    >
                      How it Works
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[23px] sm:mt-0 mt-2.5 text-base text-center text-gray-100_bf"
                      size="txtSwitzerRegular16Gray100bf"
                    >
                      About Us
                    </Text>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[113px] sm:ml-[0] ml-[97px] text-base text-center tracking-[-0.48px]"
                      shape="square"
                      color="black_900"
                      size="md"
                      variant="outline"
                    >
                      Sign in{" "}
                    </Button>
                  </div>
                  <Line className="bg-gray-100_3f h-px mt-[13px] w-full" />
                  <Text
                    className="leading-[64.00px] mt-[300px] mr-[300px] md:text-xl text-[64px] text-white-A700"
                    size="txtIvyPrestoDisplayThin64"
                  >
                    <span className="text-white-A700 font-ivyprestodisplay text-left font-hairline">
                      <>
                        Overcome Investment Barriers, <br /> Build{" "}
                      </>
                    </span>
                    <span className="text-white-A700 font-ivyprestodisplay text-left font-light italic">
                      Sustainable Wealth
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[8%] flex flex-col md:gap-10 gap-[989px] items-start justify-start right-[10%] w-[36%]">
              <div className="h-[201px] relative w-full">
                <div className="h-[201px] m-auto w-full">
                  <Img
                    className="h-[201px] m-auto object-cover rounded-tl-sm rounded-tr-sm w-full"
                    src="images/img_99acres21.png"
                    alt="99acresTwentyOne"
                  />
                  <div className="absolute flex flex-col justify-start left-[4%] top-[5%]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtIvyPrestoDisplayLight32"
                    >
                      Greensteps I
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[13px] text-white-A700 text-xs"
                      size="txtSwitzerMedium12WhiteA700"
                    >
                      Alwar, Rajasthan
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[7px] left-[5%] top-[27%]"
                  src="images/img_group203.svg"
                  alt="group203"
                />
              </div>
              <div className="border border-solid border-white-A700_7f h-[52px] rounded-sm w-[39%]"></div>
            </div>
          </div>
          <Text
            className="leading-[64.00px] md:ml-[0] ml-[362px] mt-[129px] md:text-5xl text-[64px] text-gray-900_02 tracking-[-1.28px]"
            size="txtIvyPrestoDisplayThin64Gray90002"
          >
            <>
              Why you need exposure <br /> to private markets
            </>
          </Text>
          <div className="flex md:flex-col flex-row font-abel gap-2.5 items-start justify-center md:ml-[0] ml-[328px] mt-[70px] md:px-5 w-[55%] md:w-full">
            <div className="flex flex-col gap-[11px] items-center justify-start w-[33%] md:w-full">
              <div className="bg-gray-50 border border-gray-900_26 border-solid flex flex-col items-center justify-start p-[29px] sm:px-5 w-full">
                <Text
                  className="mb-3.5 mt-[133px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                  size="txtAbelRegular24"
                >
                  <span className="text-gray-900_bf tracking-[-0.96px] font-switzer text-left font-medium">
                    Access to innovation
                  </span>
                  <span className="text-gray-900_bf tracking-[-0.96px] font-switzer text-left font-normal">
                    <>
                      {" "}
                      <br />
                    </>
                  </span>
                  <span className="text-gray-100 font-switzer text-left text-base font-normal leading-[20.00px]">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_4c_01 font-switzer text-left text-sm font-normal">
                    <>
                      Gain early access to disruptive technologies and
                      innovative companies not available on public markets.{" "}
                      <br />
                    </>
                  </span>
                </Text>
              </div>
              <div className="bg-gray-50 border border-gray-900_26 border-solid flex flex-col items-end justify-end p-[17px] w-full">
                <Text
                  className="mb-[61px] mt-[156px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                  size="txtAbelRegular24"
                >
                  <span className="text-gray-900_bf font-switzer text-left font-medium">
                    <>
                      Diversification <br />
                    </>
                  </span>
                  <span className="text-gray-900_02 font-switzer text-left text-base font-normal leading-[20.00px]">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_4c_01 font-switzer text-left text-sm font-normal">
                    Investing in private markets facilitates portfolio
                    diversification, mitigating risks associated with public
                    markets{" "}
                  </span>
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[9px] grid sm:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                <div className="bg-white-A700 border border-indigo-500 border-solid flex flex-col items-center justify-end p-7 sm:px-5 shadow-bs1 w-full">
                  <Text
                    className="mt-[156px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                    size="txtAbelRegular24"
                  >
                    <span className="text-gray-900_01 tracking-[-0.96px] font-switzer text-left font-medium">
                      <>
                        Customization
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900_02 font-switzer text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900_bf font-switzer text-left text-sm font-normal">
                      <>
                        Innovative investment structures & strategies can be
                        tailored more effectively in private markets. <br />
                      </>
                    </span>
                    <span className="text-gray-900_7f font-switzer text-left text-sm font-normal">
                      <>
                        {" "}
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
                <div className="md:h-[359px] h-[396px] relative w-full">
                  <div className="absolute bg-gray-50 border border-gray-900_26 border-solid h-[359px] inset-x-[0] mx-auto rotate-[180deg] top-[0] w-full"></div>
                  <Text
                    className="absolute bottom-[0] right-[4%] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                    size="txtAbelRegular24"
                  >
                    <span className="text-gray-900_bf font-switzer text-left font-medium">
                      <>
                        Strategic influence <br />
                      </>
                    </span>
                    <span className="text-gray-900_02 font-switzer text-left text-base font-normal leading-[20.00px]">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900_4c_01 font-switzer text-left text-sm font-normal">
                      Private market investments often grant investors greater
                      control and influence over business decisions and
                      strategies.
                    </span>
                    <span className="text-gray-900_4c_01 font-switzer text-left text-base font-normal">
                      {" "}
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                <div className="bg-gray-50 border border-gray-900_26 border-solid flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
                  <Text
                    className="mb-[5px] mt-[110px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                    size="txtAbelRegular24"
                  >
                    <span className="text-gray-900_bf tracking-[-0.96px] font-switzer text-left font-medium">
                      <>
                        Emerging market exposure <br />
                      </>
                    </span>
                    <span className="text-gray-900_01 font-switzer text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900_4c_01 font-switzer text-left text-sm font-normal">
                      <>
                        Unlock untapped potential by investing in burgeoning
                        markets with high growth prospects that are attainable
                        through private market participation.
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
                <div className="md:h-[359px] h-[390px] relative w-full">
                  <div className="absolute bg-gray-50 border border-gray-900_26 border-solid h-[359px] inset-x-[0] mx-auto rotate-[180deg] top-[0] w-full"></div>
                  <Text
                    className="absolute bottom-[0] right-[5%] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                    size="txtAbelRegular24"
                  >
                    <span className="text-gray-900_bf font-switzer text-left font-medium">
                      <>
                        Strategic influence <br />
                      </>
                    </span>
                    <span className="text-gray-900_02 font-switzer text-left text-base font-normal leading-[20.00px]">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900_4c_01 font-switzer text-left text-sm font-normal">
                      Private market investments often grant investors greater
                      control and influence over business decisions and
                      strategies.
                    </span>
                    <span className="text-gray-900_4c_01 font-switzer text-left text-base font-normal">
                      {" "}
                    </span>
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="h-[486px] md:h-[515px] md:ml-[0] ml-[211px] mt-[200px] md:px-5 relative w-[76%] md:w-full">
            <div className="absolute bottom-[0] font-switzer md:h-[315px] h-[383px] right-[0] w-[95%] md:w-full">
              <div className="absolute md:h-[315px] h-[380px] inset-y-[0] left-[0] my-auto w-[93%] md:w-full">
                <div className="absolute flex flex-col md:gap-10 gap-[105px] justify-start left-[0] top-[0] w-2/5">
                  <Line className="bg-gray-900_01 h-[3px] md:ml-[0] ml-[206px] mr-[108px] w-[16%]" />
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-between w-[99%] md:w-full">
                      <Text
                        className="mb-[3px] mt-2.5 text-gray-900_01 text-xl"
                        size="txtSwitzerSemibold20"
                      >
                        Create Account{" "}
                      </Text>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtSpaceGroteskLight32"
                      >
                        +
                      </Text>
                    </div>
                    <Line className="bg-gray-900_3f h-px w-full" />
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-row items-end justify-between left-[0] w-[39%]">
                  <Text
                    className="mt-3 text-gray-900_7f text-xl"
                    size="txtSwitzerMedium20"
                  >
                    Discover Opportunities
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtSpaceGroteskLight32"
                  >
                    +
                  </Text>
                </div>
                <Img
                  className="absolute bottom-[6%] h-[315px] object-cover right-[0] w-[53%]"
                  src="images/img_kyc1.png"
                  alt="kycOne"
                />
              </div>
              <Img
                className="absolute h-[180px] object-cover right-[0] rounded-sm top-[0] w-[30%]"
                src="images/img_screenshot20240113.png"
                alt="screenshot20240_Two"
              />
            </div>
            <Text
              className="absolute bottom-[21%] leading-[20.00px] left-[6%] text-gray-900_7f text-sm w-[31%] sm:w-full"
              size="txtSwitzerRegular14Gray9007f"
            >
              Investing in private markets facilitates portfolio
              diversification, mitigating risks associated with public markets{" "}
            </Text>
            <Text
              className="absolute leading-[64.00px] left-[0] md:text-5xl text-[64px] text-gray-900_02 top-[0]"
              size="txtIvyPrestoDisplayThin64Gray90002"
            >
              <span className="text-gray-900_02 font-ivyprestodisplay text-left font-hairline">
                How to{" "}
              </span>
              <span className="text-gray-900_02 font-ivyprestodisplay text-left font-hairline">
                <>
                  {" "}
                  <br />{" "}
                </>
              </span>
              <span className="text-gray-900_02 font-ivyprestodisplay text-left font-hairline">
                {" "}
              </span>
              <span className="text-gray-900_02 font-ivyprestodisplay text-left font-light italic">
                Invest
              </span>
            </Text>
            <Line className="absolute bg-indigo-A200 bottom-[30%] h-[109px] left-[4%] w-[3px]" />
          </div>
          <Line className="bg-gray-900_3f h-px md:ml-[0] ml-[276px] mr-[790px] mt-[7px] w-[26%]" />
          <div className="flex flex-row gap-[162px] items-end justify-start md:ml-[0] ml-[276px] mt-[51px] md:px-5 w-[26%] md:w-full">
            <Text
              className="mt-3 text-gray-900_7f text-xl"
              size="txtSwitzerMedium20"
            >
              Invest with Flexibility
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtSpaceGroteskLight32"
            >
              +
            </Text>
          </div>
          <Line className="bg-gray-900_3f h-px md:ml-[0] ml-[276px] mr-[790px] mt-[7px] w-[26%]" />
          <Text
            className="leading-[50.00px] md:ml-[0] ml-[470px] mt-[324px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 tracking-[-0.96px]"
            size="txtIvyPrestoDisplayThin48"
          >
            <span className="text-gray-900_01 font-ivyprestodisplay text-left font-light italic">
              We’re more{" "}
            </span>
            <span className="text-gray-900_01 font-ivyprestodisplay text-left font-hairline">
              <>
                than an <br />{" "}
              </>
            </span>
            <span className="text-gray-900_01 font-ivyprestodisplay text-left font-light italic">
              {" "}
            </span>
            <span className="text-gray-900_01 font-ivyprestodisplay text-left font-hairline">
              investment club{" "}
            </span>
          </Text>
          <Text
            className="md:ml-[0] ml-[365px] mt-0.5 text-center text-gray-900_01 text-sm tracking-[-0.28px] w-[53%] sm:w-full"
            size="txtSwitzerRegular14Gray90001"
          >
            <>
              Our state-of-the-art platform ensures provenance through an
              unbroken chain of custody, and rigorous independent due diligence,
              both legal and financial. We&#39;re not just helping you invest;
              we&#39;re revolutionizing how investments are made, offering a
              dynamic approach that transcends traditional boundaries. Connect
              with a community of visionaries, and embark on an exclusive
              journey where innovation meets your financial aspirations.{" "}
            </>
          </Text>
          <Text
            className="md:ml-[0] ml-[627px] mt-[77px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 tracking-[-0.96px]"
            size="txtSwitzerSemibold32"
          >
            Our Partners
          </Text>
          <Line className="bg-black-900_33 h-px max-w-[894px] mt-4 mx-auto w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[894px] mt-[5px] mx-auto md:px-5 w-full">
            <div className="h-[27px] relative w-[27px]">
              <Img
                className="h-px m-auto"
                src="images/img_arrow10.svg"
                alt="arrowTen"
              />
              <div className="absolute border border-black-900_26 border-solid h-[27px] inset-[0] justify-center m-auto rotate-[-180deg] rounded-[13px] w-[27px]"></div>
            </div>
            <div className="h-[104px] sm:h-[174px] relative w-[97%] md:w-full">
              <div className="absolute flex inset-[0] justify-center m-auto w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between my-auto w-[74%]">
                  <Img
                    className="h-[104px] md:h-auto object-cover"
                    src="images/img_carousel1.png"
                    alt="carouselOne"
                  />
                  <div className="flex h-[30px] md:h-[82px] justify-end sm:mt-0 mt-[52px] relative w-[30px]">
                    <Img
                      className="h-0.5 mb-[13px] mt-auto mx-auto"
                      src="images/img_arrow7.svg"
                      alt="arrowSeven"
                    />
                    <div className="absolute border border-solid border-white-A700 h-[30px] inset-[0] justify-center m-auto rotate-[180deg] rounded-[50%] w-[30px]"></div>
                  </div>
                </div>
                <div className="h-[104px] ml-[-227.39px] my-auto w-[53%] sm:w-full z-[1]">
                  <Img
                    className="h-[104px] m-auto object-cover w-full"
                    src="images/img_carousel2.png"
                    alt="carouselTwo"
                  />
                  <div className="absolute bg-gradient1  h-[83px] inset-y-[0] left-[4%] my-auto w-[83%]"></div>
                </div>
              </div>
              <Img
                className="absolute h-px inset-y-[0] my-auto right-[1%]"
                src="images/img_arrow9.svg"
                alt="arrowNine"
              />
              <div className="absolute border border-black-900 border-solid h-[27px] inset-y-[0] my-auto right-[0] rounded-[13px] w-[27px]"></div>
            </div>
          </div>
          <div className="bg-gradient2  flex flex-col font-ivyprestodisplay items-start justify-start mt-[314px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[124px] items-center justify-start md:px-5 w-[90%] md:w-full">
              <div className="bg-gray-900_01 flex flex-col h-[695px] md:h-auto items-center justify-end p-[29px] sm:px-5 w-[695px] md:w-full">
                <Text
                  className="leading-[60.00px] mt-[419px] sm:text-[40px] md:text-[46px] text-[54px] text-gray-100 tracking-[-1.08px]"
                  size="txtIvyPrestoDisplayThin54"
                >
                  <span className="text-gray-100 font-ivyprestodisplay text-left font-hairline">
                    Ready to{" "}
                  </span>
                  <span className="text-gray-100 font-ivyprestodisplay text-left font-light italic">
                    <>
                      {" "}
                      <br /> transcend
                    </>
                  </span>
                  <span className="text-gray-100 font-ivyprestodisplay text-left font-hairline">
                    <>
                      {" "}
                      <br /> the ordinary?{" "}
                    </>
                  </span>
                </Text>
              </div>
              <div className="flex flex-col font-switzer items-start justify-start w-[37%] md:w-full">
                <Text
                  className="text-black-900 text-sm tracking-[-0.28px] w-full"
                  size="txtSwitzerMedium14Black900"
                >
                  Click here to start your journey into the future of private
                  market investments. For more information, connect with us
                  directly through the contact form below.
                </Text>
                <div className="flex flex-row gap-[295px] items-center justify-start ml-1 md:ml-[0] mt-10 w-[93%] md:w-full">
                  <Text
                    className="text-black-900 text-sm tracking-[-0.28px]"
                    size="txtSwitzerRegular14Black900"
                  >
                    Name
                  </Text>
                  <Text
                    className="text-black-900_33 text-sm tracking-[-0.28px]"
                    size="txtSwitzerRegular14Black90033"
                  >
                    Your name here
                  </Text>
                </div>
                <Line className="bg-black-900 h-px ml-1 md:ml-[0] mt-[3px] w-[93%]" />
                <Text
                  className="ml-1 md:ml-[0] mt-16 text-black-900 text-sm tracking-[-0.28px]"
                  size="txtSwitzerRegular14Black900"
                >
                  Email ID
                </Text>
                <Line className="bg-black-900 h-px ml-1 md:ml-[0] mt-[3px] w-[93%]" />
                <Input
                  name="language_Fourteen"
                  placeholder="Phone no. "
                  className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-left text-sm tracking-[-0.28px] w-full"
                  wrapClassName="ml-1 md:ml-[0] mt-[62px] pr-[35px] w-[93%]"
                  type="number"
                ></Input>
                <Input
                  name="groupThirtyFour"
                  placeholder="Your Query ( if any )"
                  className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-left text-sm tracking-[-0.28px] w-full"
                  wrapClassName="ml-1 md:ml-[0] mt-[63px] pr-[35px] w-[93%]"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
