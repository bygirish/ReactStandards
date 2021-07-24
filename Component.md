# Components

Components are the smallest building blocks of React apps.Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. An component is a plain object describing what we want to appear in terms of the DOM nodes. Components are independent and reusable bits of code. 

A component is combination of 
- Template using HTML
- User Interactivity using JS
- Applying Styles using CSS



Conceptually a component is a JavaScript class or function that accepts inputs which are properties(props) and returns a React element that describes how a section of the User Interface should appear.
Components come in two types - 
- Function components
- Class components


## Function Components

A functional component is just a plain JavaScript function that returns JSX.


**index.tsx or index.jsx**

```

import React, {ReactNode} from "react";
import "./styles.scss";

interface IMenu {
    content: string | ReactNode;
    link: string;
}

interface IProps {
    meanus: IMenu[]
}
 
const Header = (props: IProps) => {
    const { menus } = props;

    return (
        <div className="header">
            <div className="menu-container">
                {
                    menus.map((menu: IMenu, index: number) => {
                        return (
                            <div className="menu">
                                <a href={menu.link}>{menu.content}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
 return <h1>Hello, world</h1>;
};

```

**styles.scss**
```
    .header {
        .menu-container {
            .menu {

            }
        }
    }
```


## Class Components
A class component is a JavaScript class that extends React.Component which has a render method. 


```
import React, { Component } from "react";
import "./styles.scss";

interface IUserProfile {
    firstName: string;
    lastName: string;
    email: string;
}

enum FormMode {
    edit = 'edit',
    create = 'create',
}

interface IProps {
    userProfileId: string;
    userProfile?: IUserProfile;
    mode: FormMode;
}

interface IState {

    loader: boolean;

    values: {
        firstName: string;
        lastName: string;
        email: string;
    },
    errors: {
        global: string;
        firstName: string;
        lastName: string;
        email: string;
    }
}

class UserProfile extends Component<IProps, IState>{


    private initializeState = () => {
        const { userProfile } = props;

        if(!userProfile)
            return ({

                loader: false,
                values: {
                    firstName: '',
                    lastName: '',
                    email: '',
                },
                errors: {
                    global: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                }
            });
        
        return ({

            loader: false,
            values: {
                firstName: userProfile.firstName,
                lastName: userProfile.lastName,
                email: userProfile.email,
            },
            errors: {
                global: '',
                firstName: '',
                lastName: '',
                email: '',
            }
        })

    }


    this.state = this.initializeState()


    public componentDidMount = () => {
        // To setup any resources, set up any listener, fetch data etc.
        const { userProfileId, userProfile } = this.props;
        if(userProfileId && !userProfile)
            this.fetchUserProfile();
    };

    private fetchUserProfile = () => {
        const { userProfileId } = this.props;

        // set Loader true
        this.setState({
            loader: true,
        })
        const userProfile = // API calling to fetch user profile using userProfileId

        this.setState({
            loader: false,
            values: {
                firstName: userProfile.firstName,
                lastName: userProfile.lastName,
                email: userProfile.email,
            },
        }); 
    }


    public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState> snapshot?: any: void {

        const { userProfileId } = props;
        if ((prevProps.userProfileId !== userProfileId) && userProfileId) {
            this.fetchUserProfile();
        }

    }


    public componentWillUnmount() {
        // To release any resources, remove any listener, clear data etc.
    
    }



    public render() {

        const { userProfileId, userProfile } = this.props;
        const { loader } = this.state;

        if(loader || (userProfileId && !userProfile))
            <Spinner />;

        return (
            <div className="user-profile-form-container">
                    {this.renderFirstName()}
                    {this.renderLastName()}
                    {this.renderEmail()}
                    {this.renderSubmit()}
            </div>
        );
    }

    private renderFirstName = () => {
        const { values } = this.state;
        const { firstName } = values;

        const onChange = (e: any) => {
            const value = e.target.value;

            this.setState((prevState) => ({
                values: {
                    ...prevState.values,
                    firstName: value,
                },
            }));
        }

        return (
            <div className="first-name">
                <Input  value={firstName}
                        placeholder={'Enter first name'}
                        onChange={onChange}
                        >
            </div>
        )
    }

    private renderlastName = () => {
        const { values } = this.state;
        const { lastName } = values;

        const onChange = (e: any) => {
            const value = e.target.value;

            this.setState((prevState) => ({
                values: {
                    ...prevState.values,
                    lastName: value,
                },
            }));
        }

        return (
            <div className="last-name">
                <Input  value={lastName}
                        placeholder={'Enter last name'}
                        onChange={onChange}
                        >
            </div>
        )
    }


    private renderEmail = () => {
        const { values } = this.state;
        const { email } = values;

        const onChange = (e: any) => {
            const value = e.target.value;

            this.setState((prevState) => ({
                values: {
                    ...prevState.values,
                    email: value,
                },
            }));
        }

        return (
            <div className="email">
                <Input  value={email}
                        placeholder={'Enter email'}
                        onChange={onChange}
                        >
            </div>
        )
    }



    private renderSubmit = () => {
        const { userProfileId } = this.props;
        const { values } = this.state;
        const {
            firstName,
            lastName,
            email
        } = values;


        const onSubmit = () => {
            const payload = {
                firstName,
                lastName,
                email
            }
            // API call to submit data with payload
        }

        return (
            <div className="submit">
                <Button     value={lastName}
                            text={ (userProfileId) ? 'Edit' : 'Create'}
                            onChange={onChange}
                            >
            </div>
        )




    }








}

```


styles.scss 

```
.user-profile-form-container {
    .first-name {

    }
    .last-name {

    }
    .email {

    }
    .submit {

    }
}

```



## Task

**Auth Module**
1. Pick Screen
2. List components
3. Create Functional components along with css

