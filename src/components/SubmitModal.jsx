function SubmitModal({
  open,
  onCancel,
  onSubmit,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-2xl p-8 w-[420px]">

        <h2 className="text-2xl font-bold">
          Submit Test?
        </h2>

        <p className="text-gray-500 mt-4">
          Once submitted you cannot change your answers.
        </p>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onCancel}
            className="px-6 py-3 rounded-xl bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className="px-6 py-3 rounded-xl bg-red-500 text-white font-bold"
          >
            Submit
          </button>

        </div>

      </div>

    </div>
  );
}

export default SubmitModal;