"use client";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import { FiX, FiChevronLeft } from "react-icons/fi";

export default function FeePaymentModal({ open, onClose, onSuccess }: { open: boolean; onClose: () => void; onSuccess: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-8 relative animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-lg cursor-pointer border border-[#DBE1E7] p-1 rounded-full"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX />
        </button>
        <button className="flex items-center gap-2 text-gray-500 hover:text-primary mb-6">
          <FiChevronLeft className="text-lg" /> Go Back
        </button>
        <div className="bg-white rounded-xl border border-[#DBE1E8] mb-8">
          <div className="font-semibold text-lg bg-[#F7F8F9] px-6 py-4 rounded-t-xl border-b border-[#DBE1E8]">Current Semester</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#F7F8F9] text-gray-700 border-b border-[#DBE1E8]">
                  <th className="px-6 py-4 text-left">SESSION</th>
                  <th className="px-6 py-4 text-left">PROGRAMME</th>
                  <th className="px-6 py-4 text-left">LEVEL</th>
                  <th className="px-6 py-4 text-left">SEMESTER</th>
                  <th className="px-6 py-4 text-left">STATUS</th>
                  <th className="px-6 py-4 text-left">FEE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#DBE1E8]">
                  <td className="px-6 py-4 font-medium text-gray-700">2025</td>
                  <td className="px-6 py-4 font-medium text-gray-700">B.Sc Accounting</td>
                  <td className="px-6 py-4 font-medium text-gray-700">400L</td>
                  <td className="px-6 py-4 font-medium text-gray-700">Second</td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-50 text-yellow-600 rounded-full px-4 py-1 text-sm font-medium">Not Paid</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700">N 200,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end px-6 py-2">
            <a href="#" className="text-gray-500 underline hover:text-primary">Fee Breakdown</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#F7F8F9] rounded-xl border border-[#DBE1E8] p-6">
            <div className="font-semibold text-lg mb-4">STUDENT DETAILS</div>
            <Input label="Full Name" value="Muhammed Balarebe Okechukwu" readOnly className="mb-4" />
            <Input label="Matriculation Number" value="LMS2021/0256" readOnly className="mb-4" />
            <div className="flex gap-4">
              <Input label="Current Session" value="2025" readOnly />
              <Input label="Semester" value="Second" readOnly />
            </div>
          </div>
          <div className="bg-[#F7F8F9] rounded-xl border border-[#DBE1E8] p-6">
            <div className="font-semibold text-lg mb-4">PAYMENT DETAILS</div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Student second semester tuition payment</span>
              <span className="font-semibold">N 200,000</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>SUBTOTAL</span>
              <span className="font-semibold">N 200,000</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>CHARGES</span>
              <span className="font-semibold">N 1,000</span>
            </div>
            <div className="flex justify-between mb-4 text-black text-lg font-bold">
              <span>TOTAL</span>
              <span>N 201,000</span>
            </div>
            <div className="mb-4">
              <span className="text-xs text-gray-500">Secured by <span className="font-semibold">Paystack</span></span>
              <div className="flex gap-2 mt-2">
                <img src="/paystack.png" alt="Paystack" className="h-6" />
                <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                <img src="/verve.png" alt="Verve" className="h-6" />
                <img src="/visa.png" alt="Visa" className="h-6" />
              </div>
            </div>
            <Button variant="primary" className="w-full py-4 text-lg" onClick={onSuccess}>
              Proceed to Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 