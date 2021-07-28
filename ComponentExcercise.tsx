

/*
Login Form 

- LoginForm  - Class
    - email-id
    - redirect-link

    - currentemailId
    - curentemailidError
    - currentpassword
    - currentPasswordError
    - currentloginError




    - Container (index.tsx, styles.scss) - Func
        - childern
        - HeadingText (index.tsx, styles.scss)  - Func
            - text
        - Email Input (index.tsx, styles.scss)  - Func
            - value
            - onChange
            - placeholder
        - Password Input (index.tsx, styles.scss)  - Func
            - value
            - isVisible
            - onChange
            - placeholder
        - Success Message (index.tsx, styles.scss)  - Func
            - Message
        - Error Message (index.tsx, styles.scss) - Func
            - error


cons

const LoginForm = () => {

    return (
        <ScreenContainer className={container2}>
            <HeadingText />
            <EmailInput />
            <PasswordInout />
            <SuccessMessage />
            <ErrorMessage />
        </ScreenContainer>
    )
}


*/
////////////////////////////////////////////////////////////////////////////////
ScreenContainer
<index.tsx>

import React from 'react';
import './styles.scss';

interface IProps {
    childern: ReactNode;
    className: string;
}
const ScreenContainer = (props: IProps) => {
    const { childern, className } = props;

    const style = ['screen-container', className].join(' '); // "screen-container container2"



    return (
        <div className={style}>
            {childern}
        </div>
    );
}
export ScreenContainer;

<styles.scss>
.screen-container {

}


<ScreenContainer className={container2}>




////////////////////////////////////////////////////////////////////////////////

HeadingText
<index.tsx>

import React from 'react';
import './styles.scss';

interface IProps {
    headingText: string;
    className: string;
}
const HeadingText = (props: IProps) => {
    const { headingText, className } = props;

    const style = ['heading-container', className].join(' '); 

    return (
        <div className={style}>
            {text}
        </div>
    );
}
export ScreenContainer;

<styles.scss>
.heading-container {

}


/////////////////////////////////////////////////////////////////////////////////


EmailInput
<index.tsx>

import React from 'react';
import './styles.scss';
import Input from 'material';

interface IProps {
    value: string;
    onChange: (value: string) => void;
    className: string;
}
const EmailInput = (props: IProps) => {
    const { value, onChange, className } = props;

    const style = ['email-input-container', className].join(' '); 

    const onInputChange = (e: any) =>{
        const currentValue = e.target.value;
        onChange(currentValue);
    }

    return (
        <Input  className={style} 
                value={value}
                type={email}
                onChange={onInputChange}
                />
    );
}
export EmailInput;

<styles.scss>
.email-input-container {

}

////////////////////////////////////////////////////////////////////////////////


PasswordInput
<index.tsx>

import React from 'react';
import './styles.scss';
import Input from 'material';

interface IProps {
    value: string;
    isVisble: boolean;
    onChange: (value: string) => void;
    className: string;
}
const PasswordInput = (props: IProps) => {
    const { value, onChange, className } = props;

    const style = ['password-input-container', className].join(' '); 

    const onInputChange = (e: any) =>{
        const currentValue = e.target.value;
        // password validation
        onChange(currentValue);
    }

    return (
        <Input  className={style} 
                value={value}
                type={password}
                isVisible
                onChange={onInputChange}
                />
    );
}
export PasswordInput;

<styles.scss>
.password-input-container {

}

////////////////////////////////////////////////////////////////////////////////


SuccessText
<index.tsx>

import React from 'react';
import './styles.scss';

interface IProps {
    successTextt: string;
    className: string;
}
const SuccessText = (props: IProps) => {
    const { successText, className } = props;

    const style = ['success-text-container', className].join(' '); 

    return (
        <div className={style}>
            {successText}
        </div>
    );
}
export SuccessText;

<styles.scss>
.success-text-container {

}
////////////////////////////////////////////////////////////////////////////////


ErrorText
<index.tsx>

import React from 'react';
import './styles.scss';

interface IProps {
    errorText: string;
    className: string;
}
const ErrorText = (props: IProps) => {
    const { errorText, className } = props;

    const style = ['error-text-container', className].join(' '); 

    return (
        <div className={style}>
            {errorText}
        </div>
    );
}
export SuccessText;

<styles.scss>
.error-text-container {

}

////////////////////////////////////////////////////////////////////////////////
LoginForm

<index.tsx>

import React from 'react';
import './styles.scss';

interface IProps {
    emailId: string;
    redirectLink: string;
}

interface IState {
        currentemailId: string;
        curentemailidError: string;
        currentpassword: string;
        currentPasswordError: string;
        currentloginError: string;
        successMessage: string;
        isVisiblePassword: boolean;
}


////////////////////////////////////////////////////////////////////////////////
 
class LoginForm extend Component<IProps, IState> {
    
    
    private initializeState = () => {

        const { emailId } = this.props;


        return {
            currentemailId: emailId || "",
            curentemailidError: "",
            currentpassword: "",
            currentPasswordError: "",
            currentloginError: "",
            successMessage: "";
            isVisiblePassword: '';
        }

    }


    public componentDidMount = () => {

    }


    public componentDidUpdate = (prevProps, prevState) => {

    }


    public render() {

        const {  currentemailId, curentemailidError, currentpassword} = this.state;

        const {             
            currentemailId,
            curentemailidError,
            currentpassword,
            currentPasswordError,
            currentloginError, 
            successMessage,
            isVisiblePassword

        } = this.state;


        const onEmailChange = (value: string) => {
            this.setState({
                currentemailId: value
            });
        }


        const onPasswordChange = (value: string) => {
            this.setState({
                currentpassword: value
            });
        }


        return (
            <ScreenContainer className={container2}>
                {/* <HeadingText headingText={'Login Form'}/> */}
                <Text text={'Login Form'} textType={TextType.header}
                <EmailInput value={currentemailId}
                            onChange={onEmailChange}
                            />
                <PasswordInput  value={currentemailId}
                                onChange={onPasswordChange}
                                isVisible={isVisible}
                                />
                {/* {successMessage && <SuccessMessage text={successMessage}/>} */}
                {successMessage && <Text text={successMessage} textType={TextType.succes}/>}
                
                {/* {currentloginError && <ErrorMessage text={currentloginError}/>} */}
                {currentloginError && <Text text={errorMessage} textType={TextType.error}/>}
            </ScreenContainer>
        );
    }
    


    
}


////////////////////////////////////////////////////////////////////////////////


Text
<index.tsx>

import React from 'react';
import './styles.scss';

export enum TextType {
    header = 'header';
    success = 'success';
    error = 'error';

}

interface IProps {
    text: string;
    className: string;
    textType: TextType;
}
const Text = (props: IProps) => {
    const { text, textType, className } = props;

    switch (textType) {
        case TextType.header:
            const style = ['heading-container', className].join(' '); 
            return (
                <div className={style}>
                    {text}
                </div>
            );
            
            break;
        case TextType.success:
            const style = ['success-text-container', className].join(' '); 

            return (
                <div className={style}>
                    {successText}
                </div>
            );
            
            break;
        case TextType.error:

            const style = ['error-text-container', className].join(' '); 

            return (
                <div className={style}>
                    {errorText}
                </div>
            );
            
            break;
    
        default:
            break;
    }

    return (
        <div className={style}>
            {errorText}
        </div>
    );
}
export SuccessText;

<styles.scss> 
.heading-container {

}

.success-text-container {

}

.error-text-container {

}
