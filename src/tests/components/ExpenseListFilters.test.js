import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, filledFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters correctly with filledFilters data', () => {
    wrapper.setProps({
        filters: filledFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const e = {
        target: {
            value: 'rent'
        }
    }
    wrapper.find('input').prop('onChange')(e)
    expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value)
})

test('should sort by amount', () => {
    const e = {
        target: {
            value: 'amount'
        }
    }
    wrapper.find('select').prop('onChange')(e)
    expect(sortByAmount).toHaveBeenCalled()
})

test('should sort by date', () => {
    const e = {
        target: {
            value: 'date'
        }
    }
    wrapper.find('select').prop('onChange')(e)
    expect(sortByDate).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const startDate = moment(0).add(6, 'years')
    const endDate = moment(0).add(10, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate
    })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})