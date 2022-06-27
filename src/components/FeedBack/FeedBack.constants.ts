import {arrayType} from "./FeedBack.types";

export const NAME_REGEXP = /^[a-zа-я]+$/i;
export const PHONE_REGEXP = /(^\+?[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$)|(^\+?[(][0-9]{3}[)][-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$)/im;
export const MAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const NAME_ERRORS: arrayType = [
    ['Как можно к вам обращаться', value => (value as string).length === 0],
    ['Неверно указано имя', value => !NAME_REGEXP.test(value as string)]
];

export const PHONE_ERRORS: arrayType = [
    ['Не забудьте указать номер', value => (value as string).length === 0],
    ['Некорректный номер', value => !PHONE_REGEXP.test(value as string)]
];

export const MAIL_ERRORS: arrayType = [
    ['Оставьте пожалуйста контакты', value => (value as string).length === 0],
    ['Некорректные контактные данные', value => !MAIL_REGEXP.test(value as string)]
];

export const MESSAGE_ERRORS: arrayType = [
    ['Напишите пожалуйста ваши пожелания', value => (value as string).length === 0]
];

export const PERSONAL_ERRORS: arrayType = [
    ['Необходимо ваше согласие', value => !(value as boolean)]
];
