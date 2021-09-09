import styled from "styled-components";

const StyledPaymentDone = styled.div`
    display: flex;
    align-items: center;

    margin-top: 20px;

    svg {
        width: 42px;
        height: 42px;

        color: #36b853;
    }

    p {
        font-size: 16px;
        color: #454545;
        margin: 4px;

        :first-of-type {
            font-weight: 700;
        }
    }
`;

const StyledCreditCard = styled.div`
    form {
        diplay: flex;
        flex-flow: column nowrap;

        .payment {
            display: flex;
            margin: 20px 0;

            > div {
                margin: 0 30px 0 0;
                padding: 0;
            }

            .double {
                display: flex;

                input {
                    :first-of-type {
                        flex: 3;
                        margin-right: 5px;
                    }

                    :last-of-type {
                        flex: 2;
                        margin-left: 5px;
                    }
                }

            }
        }

        input {
            width: 100%;
            height: 40px;
            padding: 5px;
            margin: 5px 0;
            border: 1px solid #e8e8e8;
            border-radius: 5px;

            ::placeholder {
                color: #aeaeae;
                padding-left: 5px;
            }

            ::focus {
                border-color: #8e8e8e;
            }
        }
    }
`;

export { StyledCreditCard, StyledPaymentDone };
