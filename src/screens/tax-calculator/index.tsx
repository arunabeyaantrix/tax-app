'use client'
import { Button, Card, Divider, Input } from '@/components'
import { useState } from 'react'
import ExemptionModal from './ExemptionModal'

const TaxCalculatorScreen = () => {
  const [income, setIncome] = useState<number>()
  const [taxData, setTaxData] = useState({
    oldRegime: 0,
    newRegime: 0,
  })
  const [showModal, setShowModal] = useState(false)

  const calculateOldRegimeTax = () => {
    if (!income) return 0
    const taxable_income = income - 50000
    let tax = 0

    if (taxable_income <= 250000) {
      tax = 0
    } else if (taxable_income <= 500000) {
      tax = (taxable_income - 250000) * 0.05
    } else if (taxable_income <= 1000000) {
      tax = 250000 * 0.05 + (taxable_income - 500000) * 0.2
    } else {
      tax = 250000 * 0.05 + 500000 * 0.2 + (taxable_income - 1000000) * 0.3
    }
    let cess = tax * 0.04
    return tax + cess
  }

  const calculateNewRegimeTax = () => {
    if (!income) return 0
    const taxable_income = income - 50000
    let tax = 0

    if (taxable_income <= 250000) {
      tax = 0
    } else if (taxable_income <= 500000) {
      tax = (taxable_income - 250000) * 0.05
    } else if (taxable_income <= 750000) {
      tax = 250000 * 0.05 + (taxable_income - 500000) * 0.1
    } else if (taxable_income <= 1000000) {
      tax = 250000 * 0.05 + 250000 * 0.1 + (taxable_income - 750000) * 0.15
    } else if (taxable_income <= 1250000) {
      tax =
        250000 * 0.05 +
        250000 * 0.1 +
        250000 * 0.15 +
        (taxable_income - 1000000) * 0.2
    } else if (taxable_income <= 1500000) {
      tax =
        250000 * 0.05 +
        250000 * 0.1 +
        250000 * 0.15 +
        250000 * 0.2 +
        (taxable_income - 1250000) * 0.25
    } else {
      tax =
        250000 * 0.05 +
        250000 * 0.1 +
        250000 * 0.15 +
        250000 * 0.2 +
        250000 * 0.25 +
        (taxable_income - 1500000) * 0.3
    }
    let cess = tax * 0.04
    return tax + cess
  }

  const handleChange = () => {
    const oldRegimeTax = calculateOldRegimeTax()
    const newRegimeTax = calculateNewRegimeTax()
    setTaxData({
      oldRegime: oldRegimeTax,
      newRegime: newRegimeTax,
    })
  }
  return (
    <Card>
      <div className="p-4 w-full h-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-3">
          Income Tax Calculator
        </h1>
        <Divider />
        <Input
          value={income ?? ''}
          label="Total gross income"
          placeholder="Enter your total LPA"
          onChange={(e) => {
            if (e.target.value === '') {
              setIncome(undefined)
              return
            }
            setIncome(parseInt(e.target.value))
          }}
        />
        <div className="flex gap-4 mt-8">
          <Button
            text="Calculate Tax"
            size="m"
            color="red"
            onClick={handleChange}
          />
          <Button
            size="m"
            color="default"
            text="Add Exemptions"
            onClick={() => setShowModal(true)}
          />
        </div>
        <ExemptionModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
        />

        <div className="flex gap-4 mt-8 ">
          <Card background="greyish">
            <div className="p-4">
              <p className="font-bold text-blue-600 text-2xl mb-3">
                Old Regime
              </p>
              <p className="text-md text-gray-600">
                Total task payable after exemptions:
              </p>
              <p>Rs. {taxData.oldRegime}</p>
            </div>
          </Card>
          <Card background="greyish">
            <div className="p-4">
              <p className="font-bold text-blue-600 text-2xl mb-3">
                New Regime
              </p>
              <p className="text-md text-gray-600">Total task payable:</p>
              <p>Rs. {taxData.newRegime}</p>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  )
}

export default TaxCalculatorScreen
