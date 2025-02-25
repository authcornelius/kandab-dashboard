import { CiSearch } from "react-icons/ci"
import { HiPlus } from "react-icons/hi"
import { PiShareNetworkBold, PiUploadBold } from "react-icons/pi"
import { NavLink } from "react-router-dom"
import TaskCard from "./TaskCard"
import { taskData } from "../data"
import { Form, Input, Modal, Select } from "antd"
import { useState } from "react"

const Board = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ isModalUpdate, setIsModalUpdate] = useState(false);
  const [ status, setStatus] = useState('');
  const [form] = Form.useForm();
  const data = taskData

  const filterType = [
    {
      name: 'By Status',
    },
    {
      name: 'By Total Tasks',
    },
    {
      name: 'Tasks Due',
    },
    {
      name: 'Extra Tasks',
    },
    {
      name: 'Tasks Completed',
    }
  ]

  const handlePost = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleCloseUpdateModal = () => {
    setIsModalUpdate(false);
  };

  const handleUpdate = (type) => {
    setStatus(type);
    setIsModalUpdate(true);
  }

  const CreateTaskModal = () => (
    <Modal
      title={<h1 className="bold-custom-font mb-5">Create New Task</h1>}
      open={isModalOpen}
      onOk={form.submit}
      onCancel={handleCloseModal}
      okText="Create Task"
      cancelText="Cancel"
      className="custom-modal"
      rootClassName="custom-modal-root"
      footer={[
        <button 
          key="cancel" 
          onClick={handleCloseModal}
          className="cursor-pointer px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 mr-2"
        >
          Cancel
        </button>,
        <button
          key="submit"
          onClick={form.submit}
          className="cursor-pointer px-4 py-2 bg-[#4F46E5] text-white rounded-md hover:bg-[#4338CA]"
        >
          Create Task
        </button>
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        // onFinish={handleSubmit}
      >
        <Form.Item
          name="title"
          label={<h1 className="medium-custom-font">Task Title</h1>}
          rules={[{ required: true, message: 'Please enter task title' }]}
        >
          <Input className="h-10" placeholder="Enter task title" />
        </Form.Item>

        <Form.Item
          name="description"
          label={<h1 className="medium-custom-font">Description</h1>} 
          rules={[{ required: true, message: 'Please enter task description' }]}
        >
          <Input.TextArea rows={4} placeholder="Enter task description" />
        </Form.Item>

        <Form.Item
          name="priority"
          label={<h1 className="medium-custom-font">Priority</h1>}
          rules={[{ required: true, message: 'Please select priority' }]}
        >
          <Select className="!h-10">
            <Select.Option value="High">High</Select.Option>
            <Select.Option value="Medium">Medium</Select.Option>
            <Select.Option value="Low">Low</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );

  const UpdateTaskModal = () => (
    <Modal
      title={<h1 className="bold-custom-font mb-5">Update Task</h1>}
      open={isModalUpdate}
      onOk={form.submit}
      onCancel={handleCloseUpdateModal}
      okText="Update Task"
      cancelText="Cancel"
      footer= {null}
      centered
    >
      {data.map((item, index) => (
        <div key={index} className="flex justify-between hover:bg-gray-100 p-2 rounded-lg">
          <h1 className="medium-custom-font my-auto">{item.task[0].title}</h1>

          <div>
            <button className={`cursor-pointer p-2 rounded-lg text-white regular-custom-font ${status === "To do" ? "bg-[#3c3b52]" : status === 'Progress' ? 'bg-[#4F46E5]' : status === "Review" ? 'bg-[#F59E0B]' : 'bg-[#F59E0B]'}`}>
              {status === "To do" ? "To do" : status === 'Progress' ? 'In progress' : status === "Review" ? 'Reviewed' : 'Completed'}
            </button>
          </div>
        </div>
      ))}
    </Modal>
  );

  return (
    <div className="w-screen lg:w-full">
      <div className="px-4 md:px-8 py-4 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="col-span-full lg:col-span-2">
          <h1 className="extra-bold-custom-font text-2xl">Kanban Dashboard 🃏</h1>
        </div>

        <div className="col-span-full lg:col-span-1 flex items-center gap-4 lg:justify-end">
          <CiSearch size={20} className="text-[#475569] cursor-pointer" />

          <button className="cursor-pointer flex items-center gap-2 bg-[#4F46E5] text-white px-4 py-2 rounded-lg">
            <h1 className="bold-custom-font">Share</h1>
            <PiShareNetworkBold size={20} />
          </button>

          <PiUploadBold
            size={40}
            className="border text-[#475569] border-[#CBD5E1] rounded-full p-2 cursor-pointer"
          />

          <HiPlus
            size={40}
            className="border text-[#475569] border-[#CBD5E1] rounded-full p-2 cursor-pointer"
            onClick={handlePost}
          />
        </div>
      </div>
      
      <div className="px-4 md:px-8 py-[14px] border-b-2 border-gray-200 overflow-x-auto scrollbar-hide lg:flex lg:justify-between">
        <div className="space-x-2.5 whitespace-nowrap my-auto mt-5">
          {filterType.map((item, index) => (
            <NavLink
              key={index}
              className="bold-custom-font py-4 pr-4 text-[#475569] border-b-2 border-gray-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex space-x-2">
          <h1 className="my-auto bold-custom-font text-[#1E293B]">Sort By </h1>
          <div className="border border-[#CBD5E1] rounded-full p-[10px] w-[98px]">
            <select className="my-auto semi-bold-custom-font text-[#475569]">
              <option>Newest</option>
              <option>Old</option>
            </select>
          </div>
        </div>
      </div>


      <div className="h-full px-4 py-8 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* in progress div */}
        <div className="">
          <div className="bg-[#4F46E5] pl-2 pr-3 py-2 rounded-full mb-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="bg-white w-8 h-8 rounded-full my-auto mr-2 flex justify-center items-center">
                  <h1 className="text-[#4F46E5] semi-bold-custom-font">
                    {data.filter(item => item.status.toLowerCase() === "in progress").length}
                  </h1>
                </div>

                <h1 className="my-auto text-white bold-custom-font">In Progress</h1>
              </div>

              <HiPlus className="cursor-pointer my-auto text-white" size={20} onClick={() =>  handleUpdate('To do')} />
            </div>
          </div>

          <div className="space-y-3">
            {data.map((item, index) => (
               item.status === "in Progress" && <TaskCard key={index} data={item} />
            ))}
          </div>
        </div>

        {/* Review div */}
        <div>
          <div className="bg-[#F59E0B] pl-2 pr-3 py-2 rounded-full mb-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="bg-white w-8 h-8 rounded-full my-auto mr-2 flex justify-center items-center">
                  <h1 className="text-[#F59E0B] semi-bold-custom-font">
                    {data.filter(item => item.status.toLowerCase() === "review").length}
                  </h1>
                </div>

                <h1 className="my-auto text-white bold-custom-font">Reviewed</h1>
              </div>

              <HiPlus className="cursor-pointer my-auto text-white" size={20} onClick={() =>  handleUpdate('Progress')} />
            </div>
          </div>

          <div className="space-y-3">
            {data.map((item, index) => (
               item.status === "review" && <TaskCard key={index} data={item} />
            ))}
          </div>
        </div>

        {/* Completed div */}
        <div>
          <div className="bg-[#22C55E] pl-2 pr-3 py-2 rounded-full mb-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="bg-white w-8 h-8 rounded-full my-auto mr-2 flex justify-center items-center">
                  <h1 className="text-[#22C55E] semi-bold-custom-font">
                    {data.filter(item => item.status.toLowerCase() === "completed").length}
                  </h1>
                </div>

                <h1 className="my-auto text-white bold-custom-font">Completed</h1>
              </div>

              <HiPlus className="cursor-pointer my-auto text-white" size={20} onClick={() =>  handleUpdate('Review')} />
            </div>
          </div>

          <div className="space-y-3">
            {data.map((item, index) => (
               item.status === "completed" && <TaskCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>

      <CreateTaskModal />
      <UpdateTaskModal />
    </div>
  )
}

export default Board
