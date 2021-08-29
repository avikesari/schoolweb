import { v4 as uuid } from 'uuid';

export default [
    {
      id: uuid(),
      ref: 'CLSS01',
      amount: 30.5,
      subject: {
        name: 'Maths'
      },
      students: 35,
      createdAt: 1555016400000,
      status: 'Live'
    },
    {
      id: uuid(),
      ref: 'CLSS02',
      amount: 25.1,
      subject: {
        name: 'Science'
      },
      students: 45,
      createdAt: 1555016400000,
      status: 'delivered'
    },
    {
      id: uuid(),
      ref: 'CLSS03',
      amount: 10.99,
      subject: {
        name: 'Social Science'
      },
      students: 35,
      createdAt: 1554930000000,
      status: 'Live'
    },
    {
      id: uuid(),
      ref: 'CLSS04',
      amount: 96.43,
      subject: {
        name: 'Physics'
      },
      students: 55,
      createdAt: 1554757200000,
      status: 'Live'
    },
    {
      id: uuid(),
      ref: 'CLSS05',
      amount: 32.54,
      subject: {
        name: 'Art'
      },
      students: 32,
      createdAt: 1554670800000,
      status: 'delivered'
    },
    {
      id: uuid(),
      ref: 'CLSS06',
      amount: 16.76,
      subject: {
        name: 'Adam Denisov'
      },
      students: 25,
      createdAt: 1554670800000,
      status: 'delivered'
    }
  ];