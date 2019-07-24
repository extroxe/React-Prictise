// import {ISignIn, ISignUp} from './../interfaces/index';
import {observable, action} from 'mobx';
// import api from '../api/auth';
import {IUser} from '../models';

// 登录注册状态
class AuthStore {
    @observable token: string;
    @observable id: string;
    @observable email: string;

    constructor() {
        this.id = '';
        this.token = '';
        this.email = '';
    }

    setLocalStorage({id, token, email}: IUser) {
        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
    }

    clearStorage() {
        localStorage.clear();
    }

    @action
    async signIn(data: boolean) {
        try {
            const {data: res} = {} as any;
            this.id = res.data.id;
            this.token = res.data.token;
            this.email = res.data.email;
            this.setLocalStorage({
                id: this.id,
                token: this.token,
                email: this.email
            });
            return res;
        } catch (error) {
            return error;
        }
    }

    @action
    async signUp(data: boolean) {
        try {
            const {data: res} = {} as any;
            this.id = res.data.id;
            this.token = res.data.token;
            this.email = res.data.email;
            this.setLocalStorage({
                id: this.id,
                token: this.token,
                email: this.email
            });
            return res;
        } catch (error) {
            return error;
        }
    }

    @action signOut() {
        this.id = '';
        this.token = '';
        this.email = '';
        this.clearStorage()
    }
}

export default AuthStore;