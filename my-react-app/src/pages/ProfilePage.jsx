import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Form state for editing
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    availability: '',
    hobbies: [],
    interests: [],
  });

  // For adding new hobby/interest inputs
  const [newHobby, setNewHobby] = useState('');
  const [newInterest, setNewInterest] = useState('');
const { API_BASE_URL } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/auth/profile`, {
          withCredentials: true,
        });
        setUser(res.data);

        // Populate formData when data is fetched
        setFormData({
          name: res.data.name || '',
          email: res.data.email || '',
          role: res.data.role || '',
          availability: res.data.availability || '',
          hobbies: res.data.hobbies || [],
          interests: res.data.interests || [],
        });
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Loading profile...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-lg">
        {error}
      </div>
    );
  if (!user)
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        No user data available.
      </div>
    );

  // Handlers for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add new hobby to formData.hobbies array
  const handleAddHobby = () => {
    const hobby = newHobby.trim();
    if (hobby && !formData.hobbies.includes(hobby)) {
      setFormData((prev) => ({
        ...prev,
        hobbies: [...prev.hobbies, hobby],
      }));
      setNewHobby('');
    }
  };

  // Add new interest to formData.interests array
  const handleAddInterest = () => {
    const interest = newInterest.trim();
    if (interest && !formData.interests.includes(interest)) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }));
      setNewInterest('');
    }
  };

  // Remove hobby by index
  const removeHobby = (index) => {
    setFormData((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((_, i) => i !== index),
    }));
  };

  // Remove interest by index
  const removeInterest = (index) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.filter((_, i) => i !== index),
    }));
  };

  // Submit updated profile to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/auth/profile`,
        formData,
        { withCredentials: true }
      );
      if (res.status === 200) {
        setUser(res.data); // assuming updated user data is returned
        setIsEditing(false);
        alert('Profile updated successfully!');
      }
    } catch (err) {
      alert('Failed to update profile');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-12 relative">
      {/* Edit / Update Profile Button */}
      {!isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow"
        >
          Edit Profile
        </button>
      )}

      {/* Header */}
      <header className="flex items-center space-x-6 mb-10">
        <div className="w-28 h-28 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-6xl font-bold uppercase shadow-inner">
          {user.name ? user.name.charAt(0) : 'U'}
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">{user.name || 'Unnamed User'}</h1>
          <p className="text-indigo-600 font-medium">{user.role?.toUpperCase() || 'ROLE NOT SET'}</p>
        </div>
      </header>

      {!isEditing ? (
        <>
          {/* Display Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <section className="bg-indigo-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4 border-b border-indigo-300 pb-1">
                Personal Info
              </h2>
              <dl className="space-y-3 text-gray-800">
                <div>
                  <dt className="font-semibold">Name:</dt>
                  <dd>{user.name || 'Not provided'}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Email:</dt>
                  <dd>{user.email || 'Not provided'}</dd>
                </div>
        
                <div>
                  <dt className="font-semibold">Role:</dt>
                  <dd>{user.role || 'Not provided'}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Availability:</dt>
                  <dd>{user.availability || 'Not specified'}</dd>
                </div>
              </dl>
            </section>

           

            <section className="bg-indigo-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4 border-b border-indigo-300 pb-1">
                Hobbies
              </h2>
              {user.hobbies && user.hobbies.length > 0 ? (
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  {user.hobbies.map((hobby, i) => (
                    <li key={i}>{hobby}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 italic">No hobbies listed.</p>
              )}
            </section>

            <section className="bg-indigo-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4 border-b border-indigo-300 pb-1">
                Interests
              </h2>
              {user.interests && user.interests.length > 0 ? (
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  {user.interests.map((interest, i) => (
                    <li key={i}>{interest}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 italic">No interests listed.</p>
              )}
            </section>
          </div>
        </>
      ) : (
        // Edit mode with form
        <form onSubmit={handleSubmit} className="space-y-8 mt-6 max-w-3xl">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          

          {/* Role */}
          <div>
            <label htmlFor="role" className="block font-semibold mb-1">
              Role
            </label>
            <input
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Availability */}
          <div>
            <label htmlFor="availability" className="block font-semibold mb-1">
              Availability
            </label>
            <input
              id="availability"
              name="availability"
              type="text"
              value={formData.availability}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Hobbies */}
          <div>
            <label className="block font-semibold mb-2">Hobbies</label>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Add hobby"
                value={newHobby}
                onChange={(e) => setNewHobby(e.target.value)}
                className="flex-grow border rounded px-3 py-2"
              />
              <button
                type="button"
                onClick={handleAddHobby}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {formData.hobbies.map((hobby, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span>{hobby}</span>
                  <button
                    type="button"
                    onClick={() => removeHobby(i)}
                    className="text-red-500 hover:text-red-700 font-bold"
                    aria-label="Remove hobby"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div>
            <label className="block font-semibold mb-2">Interests</label>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Add interest"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                className="flex-grow border rounded px-3 py-2"
              />
              <button
                type="button"
                onClick={handleAddInterest}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {formData.interests.map((interest, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span>{interest}</span>
                  <button
                    type="button"
                    onClick={() => removeInterest(i)}
                    className="text-red-500 hover:text-red-700 font-bold"
                    aria-label="Remove interest"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Form buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                // reset form to current user data on cancel
                setFormData({
                  name: user.name || '',
                  email: user.email || '',
                  age: user.age || '',
                  role: user.role || '',
                  availability: user.availability || '',
                  bio: user.bio || '',
                  hobbies: user.hobbies || [],
                  interests: user.interests || [],
                });
                setNewHobby('');
                setNewInterest('');
              }}
              className="px-6 py-2 rounded border border-gray-400 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
