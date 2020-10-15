using System;
using System.Collections.Generic;
using System.Linq;
using Gifter.Models;
using Gifter.Repositories;

namespace Gifter.Tests.Mocks
{
    class InMemoryUserProfileRepository : IUserProfileRepository
    {
        private readonly List<UserProfile> _data;

        public List<UserProfile> InternalData
        {
            get
            {
                return _data;
            }
        }
        public InMemoryUserProfileRepository(List<UserProfile> startingDate)
        {
            _data = startingDate;
        }
        public void Add(UserProfile userProfile)
        {
            var lastUser = _data.Last();
            userProfile.Id = lastUser.Id + 1;
            _data.Add(userProfile);
        }

        public void Delete(int id)
        {
            var userToDelete = _data.FirstOrDefault(u => u.Id == id);
            if (userToDelete == null)
            {
                return;
            }

            _data.Remove(userToDelete);
        }

        public List<UserProfile> GetAll()
        {
            return _data;
        }

        UserProfile IUserProfileRepository.GetByFirebaseUserId(string firebaseUserId)
        {
            throw new NotImplementedException();
        }

        UserProfile IUserProfileRepository.GetById(int id)
        {
            throw new NotImplementedException();
        }

        public UserProfile GetUserByIdWithPosts(int id)
        {
            return _data.FirstOrDefault(u => u.Id == id);
        }

        public void Update(UserProfile userProfile)
        {
            var currentUser = _data.FirstOrDefault(u => u.Id == userProfile.Id);
            if (currentUser == null)
            {
                return;
            }

            currentUser.Name = userProfile.Name;
            currentUser.Email = userProfile.Email;
            currentUser.Bio = userProfile.Bio;
            currentUser.DateCreated = userProfile.DateCreated;
            currentUser.Posts = userProfile.Posts;
            
        }
    }
}
