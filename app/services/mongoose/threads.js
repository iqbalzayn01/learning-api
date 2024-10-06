const Threads = require('../../api/threads/model');
const { BadRequestError, NotFoundError } = require('../../errors');

const createThreads = async (req) => {
  const { content, hashTags } = req.body;

  if (!content) {
    throw new BadRequestError('Content are required');
  }

  const result = await Threads.create({
    content,
    hashTags,
  });

  return result;
};

const getAllThreads = async (req) => {
  const result = await Threads.find();

  return result;
};

const getOneThreads = async (req) => {
  const { id } = req.params;
  const result = await Threads.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Cannot find Thread with ID: ${id}`);

  return result;
};

const updateThreads = async (req) => {
  const { id } = req.params;
  const { content, hashTags } = req.body;

  const result = await Threads.findOneAndUpdate(
    { _id: id },
    { content, hashTags },
    { new: true, runValidators: true }
  );

  if (!result) throw new NotFoundError(`Cannot find Thread with ID: ${id}`);

  return result;
};

const deleteThreads = async (req) => {
  const { id } = req.params;
  const result = await Threads.findOne({
    _id: id,
  });

  if (!result) {
    throw new NotFoundError(`Cannot find Thread with ID: ${id}`);
  }

  await result.deleteOne({ _id: id });

  return result;
};

module.exports = {
  createThreads,
  getAllThreads,
  getOneThreads,
  updateThreads,
  deleteThreads,
};
