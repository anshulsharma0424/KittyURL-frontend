import React, { useState } from 'react';
import { useStoreContext } from '../../contextApi/ContextApi';
import { useForm } from 'react-hook-form';
import TextField from '../TextField';
import { Tooltip } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import api from '../../api/api';
import toast from 'react-hot-toast';

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: '',
    },
    mode: 'onTouched',
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post('/api/urls/shorten', data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${res.shortUrl}`;

      try {
        await navigator.clipboard.writeText(shortenUrl);
        toast.success('Short URL Copied to Clipboard', {
          position: 'bottom-center',
          className: 'mb-5',
          duration: 3000,
        });
      } catch {
        toast.error('Failed to copy to clipboard');
      }

      await refetch();
      reset();
      setOpen(false);
    } catch (error) {
      toast.error('Create ShortURL Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createShortUrlHandler)}
      className="relative w-full"
    >
      <h1 className="font-montserrat text-center font-bold text-[22px] text-slate-800">
        Create New Shorten URL
      </h1>

      <hr className="mt-2 mb-4 text-slate-950" />

      <TextField
        label="Enter URL"
        required
        id="originalUrl"
        placeholder="https://example.com"
        type="url"
        message="Url is required"
        register={register}
        errors={errors}
      />

      <div className="mt-4 flex justify-between items-center">
        <button
          className="bg-customRed font-semibold text-white bg-custom-gradient px-4 py-2 rounded-md"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Create'}
        </button>

        {!loading && (
          <Tooltip title="Close">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-slate-800 text-2xl"
            >
              <RxCross2 />
            </button>
          </Tooltip>
        )}
      </div>
    </form>
  );
};

export default CreateNewShorten;
