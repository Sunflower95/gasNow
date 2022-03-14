@extends('layouts.app')
@section("app-content")

<div class="kt-portlet kt-portlet--height-fluid">
												<div class="kt-portlet__head">
													<div class="kt-portlet__head-label">
														<h3 class="kt-portlet__head-title">Change Password<small>change or reset your account password</small></h3>
													</div>
													<div class="kt-portlet__head-toolbar kt-hidden">
														<div class="kt-portlet__head-toolbar">
															<div class="dropdown dropdown-inline">
																<button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<i class="la la-sellsy"></i>
																</button>
																<div class="dropdown-menu dropdown-menu-right">
																	<ul class="kt-nav">
																		<li class="kt-nav__section kt-nav__section--first">
																			<span class="kt-nav__section-text">Quick Actions</span>
																		</li>
																		<li class="kt-nav__item">
																			<a href="#" class="kt-nav__link">
																				<i class="kt-nav__link-icon flaticon2-graph-1"></i>
																				<span class="kt-nav__link-text">Statistics</span>
																			</a>
																		</li>
																		<li class="kt-nav__item">
																			<a href="#" class="kt-nav__link">
																				<i class="kt-nav__link-icon flaticon2-calendar-4"></i>
																				<span class="kt-nav__link-text">Events</span>
																			</a>
																		</li>
																		<li class="kt-nav__item">
																			<a href="#" class="kt-nav__link">
																				<i class="kt-nav__link-icon flaticon2-layers-1"></i>
																				<span class="kt-nav__link-text">Reports</span>
																			</a>
																		</li>
																		<li class="kt-nav__item">
																			<a href="#" class="kt-nav__link">
																				<i class="kt-nav__link-icon flaticon2-bell-1o"></i>
																				<span class="kt-nav__link-text">Notifications</span>
																			</a>
																		</li>
																		<li class="kt-nav__item">
																			<a href="#" class="kt-nav__link">
																				<i class="kt-nav__link-icon flaticon2-file-1"></i>
																				<span class="kt-nav__link-text">Files</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
												<form class="kt-form kt-form--label-right">
													<div class="kt-portlet__body">
														<div class="kt-section kt-section--first">
															<div class="kt-section__body">
																<div class="alert alert-solid-danger alert-bold fade show kt-margin-t-20 kt-margin-b-40" role="alert">
																	<div class="alert-icon"><i class="fa fa-exclamation-triangle"></i></div>
																	<div class="alert-text">Configure user passwords to expire periodically. Users will need warning that their passwords are going to expire, <br>or they might inadvertently get locked out of the system!</div>
																	<div class="alert-close">
																		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
																			<span aria-hidden="true"><i class="la la-close"></i></span>
																		</button>
																	</div>
																</div>
																<div class="row">
																	<label class="col-xl-3"></label>
																	<div class="col-lg-9 col-xl-6">
																		<h3 class="kt-section__title kt-section__title-sm">Change Or Recover Your Password:</h3>
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Current Password</label>
																	<div class="col-lg-9 col-xl-6">
																		<input type="password" class="form-control" value="" placeholder="Current password">
																		<a href="#" class="kt-link kt-font-sm kt-font-bold kt-margin-t-5">Forgot password ?</a>
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">New Password</label>
																	<div class="col-lg-9 col-xl-6">
																		<input type="password" class="form-control" value="" placeholder="New password">
																	</div>
																</div>
																<div class="form-group form-group-last row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Verify Password</label>
																	<div class="col-lg-9 col-xl-6">
																		<input type="password" class="form-control" value="" placeholder="Verify password">
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="kt-portlet__foot">
														<div class="kt-form__actions">
															<div class="row">
																<div class="col-lg-3 col-xl-3">
																</div>
																<div class="col-lg-9 col-xl-9">
																	<button type="reset" class="btn btn-brand btn-bold">Change Password</button>&nbsp;
																	<button type="reset" class="btn btn-secondary">Cancel</button>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>

@endsection

@push("scripts")
<!--begin::Page Scripts(used by this page) -->
<script src="{{ asset("assets/js/pages/dashboard.js") }}"  type="text/javascript"></script>
		<script src="{{ asset("assets/js/pages/custom/user/profile.js") }}" type="text/javascript"></script>
		<!--end::Page Scripts -->
@endpush
