import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { AuthUser } from 'src/types/AuthUser';
import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';
import { throwHTTPErr } from 'src/utils';
import { USER_NOT_FOUND } from 'src/errors';
import { User as ExportUser } from 'src/types/User';

@Controller({ path: 'user', version: '1' })
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('me')
	@UseGuards(JwtAuthGuard)
	async me(@User() authUser: AuthUser) {
		const { uid, email, displayName, photoURL, createdOn } = authUser;
		return <ExportUser>{
			uid,
			email,
			displayName,
			photoURL,
			createdOn
		};
	}
}
