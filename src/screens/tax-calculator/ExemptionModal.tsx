import { Modal, Input, Button, Divider } from '@/components'
import React from 'react'
import { sectionData } from '../about'

const ExemptionModal: React.FC<{
  showModal: Boolean
  onClose: () => void
}> = ({ showModal, onClose }) => {
  return (
    <>
      {showModal && (
        <Modal>
          <div>
            <div className="flex p-4 w-full rouded-t-md border-b border-gray-200">
              <p className="text-2xl">Add Tax exemptions</p>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              <div className="p-6">
                {sectionData.map((section) => (
                  <>
                    <div>
                      <p className="text-2xl text-red-800 mb-3">
                        Section {section.type}
                      </p>
                      <Divider />
                    </div>

                    {section.investments.map((investment) => (
                      <div className="flex gap-4 my-3 items-center justify-between">
                        <p className="text-md text-gray-700">
                          {investment.title}:
                        </p>
                        <div className="max-w-85 flex gap-1 items-baseline">
                          <p className="text-md text-gray-700">Rs.</p>
                          <Input value={''} />
                        </div>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-4 p-4 w-full border-t border-gray-200">
              <Button text="Submit" color="default" size="l" />
              <Button text="Cancel" color="red" size="l" onClick={onClose} />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default ExemptionModal
