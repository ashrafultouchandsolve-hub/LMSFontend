using SmartTaskManagement.Application.DTOs.Auth;
using SmartTaskManagement.Application.Interfaces.Auth;
using SmartTaskManagement.Application.Interfaces.Repositories;
using SmartTaskManagement.Domain.Entities;

namespace SmartTaskManagement.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IJwtTokenService _jwtTokenService;

        public AuthService(IUserRepository userRepository, IJwtTokenService jwtTokenService)
        {
            _userRepository = userRepository;
            _jwtTokenService = jwtTokenService;
        }

        public async Task<AuthResponseDto> RegisterAsync(RegisterRequestDto request)
        {
            var exists = await _userRepository.ExistsByEmailAsync(request.Email);
            if (exists)
            {
                throw new Exception("User already exists.");
            }

            var user = new AppUser
            {
                FullName = request.FullName,
                Email = request.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
                Role = "User",
                CreatedBy = request.Email
            };

            await _userRepository.AddAsync(user);

            var token = _jwtTokenService.GenerateToken(user);

            return new AuthResponseDto
            {
                Token = token,
                Email = user.Email,
                FullName = user.FullName,
                Role = user.Role
            };
        }

        public async Task<AuthResponseDto> LoginAsync(LoginRequestDto request)
        {
            var user = await _userRepository.GetByEmailAsync(request.Email);
            if (user is null)
            {
                throw new Exception("Invalid email or password.");
            }

            var isValidPassword = BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash);
            if (!isValidPassword)
            {
                throw new Exception("Invalid email or password.");
            }

            var token = _jwtTokenService.GenerateToken(user);

            return new AuthResponseDto
            {
                Token = token,
                Email = user.Email,
                FullName = user.FullName,
                Role = user.Role
            };
        }
    }
}
