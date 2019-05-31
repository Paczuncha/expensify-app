import { ExpensesSummary } from '../../components/ExpensesSummary'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import React from 'react'

test('should render ExpensesSummary correctly with 0 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} expensesCount={123} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} expensesCount={11122233344} />)
    expect(wrapper).toMatchSnapshot()
})