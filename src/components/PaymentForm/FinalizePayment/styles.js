import styled from "styled-components";

const StyledPayment = styled.div`
    display: flex;
    flex-flow: column nowrap;

    width: 710px;
    height: 510px;

    .ticket {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        width: 290px;
        height: 110px;
        margin-top: 20px;
        border-radius: 20px;

        background-color: #ffeed2;

        p {
            margin: 5px;

            :first-of-type {
                color: #454545;
            }

            :last-of-type {
                color: #898989;
            }
        }
    }

    > h2 {
        margin: 30px 0 0;
        font-size: 20px;
        color: #8e8e8e;
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

        button {
            margin-top: 40px;
            font-size: 14px;
            border: none;
            background-color: #e0e0e0;
            height: 35px;
            width: 200px;
            box-shadow: 0 0 10px rgba(0, 0, 0, .25);
        }
    }
`;

export { StyledPayment, StyledCreditCard };
