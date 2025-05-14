const ActionButtons = ({ isSaving, handleSave, handleCancel }) => (
  <div className="flex items-center gap-2 justify-end">
    <button
      className={`text-small rounded-md border-none cursor-pointer py-2 px-6 text-navy bg-white w-32`}
      onClick={handleCancel}
    >
      Cancel
    </button>
    <button
      className={`text-small rounded-md border-none cursor-pointer py-2 px-6 text-white bg-blueberry w-32 ${
        isSaving ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleSave}
      disabled={isSaving}
    >
      {isSaving ? "Saving..." : "Save"}
    </button>
  </div>
);

export default ActionButtons;
